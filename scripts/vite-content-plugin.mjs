import { execFile } from 'node:child_process';
import path from 'node:path';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

export function contentWatcher() {
  return {
    name: 'watch-site-content',
    async configureServer(server) {
      const root = server.config.root;
      const contentRoot = path.join(root, 'content');
      const build = () => execFileAsync(process.execPath, ['scripts/build-content.mjs'], { cwd: root });

      // Generate the imported JSON before Vite serves the first page.
      await build();

      let timer;
      let pending = Promise.resolve();
      let closed = false;
      const onChange = (_event, file) => {
        const relative = path.relative(contentRoot, path.resolve(root, file));
        if (relative === '..' || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) return;
        clearTimeout(timer);
        timer = setTimeout(() => {
          // Asset copying removes/recreates folders; never overlap builds.
          pending = pending.then(async () => {
            if (closed) return;
            await build();
            if (closed) return;
            server.config.logger.info('Content rebuilt.');
            server.ws.send({ type: 'full-reload' });
          }).catch(error => {
            server.config.logger.error(`Content build failed: ${error.stderr || error.message}`);
          });
        }, 150);
      };

      server.watcher.add(contentRoot);
      server.watcher.on('all', onChange);
      server.httpServer?.once('close', () => {
        closed = true;
        clearTimeout(timer);
        server.watcher.off('all', onChange);
      });
    }
  };
}
