import { parseFragment, serialize } from 'parse5';

const SITE_HOSTS = new Set(['jameslytle.com', 'www.jameslytle.com', '03stories.github.io']);

export function externalContentLinks(html) {
  const fragment = parseFragment(html);

  function visit(node) {
    if (node.tagName === 'a') {
      const href = node.attrs.find((attr) => attr.name === 'href')?.value;
      if (href && /^(https?:)?\/\//i.test(href)) {
        try {
          const url = new URL(href, 'https://jameslytle.com');
          if (!SITE_HOSTS.has(url.hostname)) {
            let target = node.attrs.find((attr) => attr.name === 'target');
            if (!target) {
              target = { name: 'target', value: '_blank' };
              node.attrs.push(target);
            }
            if (target.value.toLowerCase() === '_blank') {
              const rel = node.attrs.find((attr) => attr.name === 'rel');
              const tokens = new Set((rel?.value || '').split(/\s+/).filter(Boolean));
              tokens.add('noopener');
              tokens.add('noreferrer');
              if (rel) rel.value = [...tokens].join(' ');
              else node.attrs.push({ name: 'rel', value: [...tokens].join(' ') });
            }
          }
        } catch {
          // Preserve malformed author URLs rather than failing the content build.
        }
      }
    }
    for (const child of node.childNodes || []) visit(child);
  }

  visit(fragment);
  return serialize(fragment);
}
