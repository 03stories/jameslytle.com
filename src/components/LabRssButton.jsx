import { useEffect, useRef, useState } from 'react';
import { copyText } from '../utils/copyText';

const feedPath = `${import.meta.env.BASE_URL}lab.xml`;

export default function LabRssButton() {
  const [status, setStatus] = useState('');
  const timeout = useRef(null);

  useEffect(() => () => clearTimeout(timeout.current), []);

  async function copyFeedLink() {
    try {
      await copyText(new URL(feedPath, window.location.origin).href);
      clearTimeout(timeout.current);
      setStatus('copied');
      timeout.current = setTimeout(() => setStatus(''), 3000);
    } catch {
      clearTimeout(timeout.current);
      setStatus('failed');
    }
  }

  return <div className="lab-rss-copy">
    <button type="button" className="portfolio-text-link" onClick={copyFeedLink}>Copy RSS link</button>
    <span role="status">
      {status === 'copied' && 'Link copied.'}
      {status === 'failed' && <a href={feedPath}>Copy the feed address manually</a>}
    </span>
  </div>;
}
