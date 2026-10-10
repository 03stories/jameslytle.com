import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MediaViewer.css';

// Enhances both React images and images supplied by rendered Markdown.
// Use data-no-fullscreen on images with another interaction (such as palette sampling).
export default function MediaViewer() {
  const { pathname } = useLocation();
  const [media, setMedia] = useState(null);
  const dialog = useRef(null);
  const trigger = useRef(null);
  useEffect(() => {
    const images = [...document.querySelectorAll('.site-main img:not([data-no-fullscreen]):not(.palette-preview-image)')].filter(img => !img.closest('a'));
    const cleanups = images.map(img => {
      const original = { role: img.getAttribute('role'), tab: img.getAttribute('tabindex'), label: img.getAttribute('aria-label') };
      {
        img.setAttribute('role', 'button');
        img.setAttribute('tabindex', '0');
        img.setAttribute('aria-label', `View full screen: ${img.alt || 'image'}`);
      }
      img.classList.add('media-viewer-trigger');
      const open = event => {
        event.preventDefault();
        event.stopPropagation();
        trigger.current = img;
        setMedia({ src: img.currentSrc || img.src, alt: img.alt || 'Full-screen image' });
      };
      const key = event => { if (event.key === 'Enter' || event.key === ' ') open(event); };
      img.addEventListener('click', open);
      img.addEventListener('keydown', key);
      return () => {
        img.removeEventListener('click', open);
        img.removeEventListener('keydown', key);
        img.classList.remove('media-viewer-trigger');
        for (const [attr, value] of Object.entries({ role: original.role, tabindex: original.tab, 'aria-label': original.label })) {
          if (value === null) img.removeAttribute(attr); else img.setAttribute(attr, value);
        }
      };
    });
    return () => cleanups.forEach(cleanup => cleanup());
  }, [pathname]);
  useEffect(() => { setMedia(null); }, [pathname]);
  useEffect(() => {
    if (!media) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current.showModal();
    return () => {
      document.body.style.overflow = previousOverflow;
      dialog.current?.close();
      trigger.current?.focus();
    };
  }, [media]);
  return (
    <dialog ref={dialog} className="media-viewer" aria-label="Full-screen image viewer" onCancel={() => setMedia(null)} onClick={event => { if (event.target === event.currentTarget) setMedia(null); }}>
      {media && <>
        <img src={media.src} alt={media.alt} onClick={event => {
          const img = event.currentTarget;
          const rect = img.getBoundingClientRect();
          const scale = Math.min(rect.width / img.naturalWidth, rect.height / img.naturalHeight);
          const x = (rect.width - img.naturalWidth * scale) / 2;
          const y = (rect.height - img.naturalHeight * scale) / 2;
          if (event.clientX < rect.left + x || event.clientX > rect.right - x || event.clientY < rect.top + y || event.clientY > rect.bottom - y) setMedia(null);
        }} />
        <button className="media-viewer-close" aria-label="Close full-screen image" onClick={() => setMedia(null)} autoFocus><span aria-hidden="true">×</span> Close</button>
      </>}
    </dialog>
  );
}
