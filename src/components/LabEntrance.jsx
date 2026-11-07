import { useEffect, useRef } from 'react';
import { useHref, useLocation, useNavigate } from 'react-router-dom';

export default function LabEntrance() {
  const shade = useRef(null);
  const labHref = useHref('/other-things');
  const { key } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const element = shade.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const labPath = new URL(labHref, window.location.href).pathname;
    let sweep;

    function enterLab(event) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest?.('a[href]');
      if (!link || (link.target && link.target !== '_self') || link.hasAttribute('download')) return;

      const url = new URL(link.href);
      if (url.origin !== window.location.origin || url.pathname !== labPath || reducedMotion.matches || !element.animate) return;

      event.preventDefault();
      if (sweep) return;
      sweep = element.animate(
        [{ transform: 'translateX(100%)' }, { transform: 'translateX(0)' }],
        { duration: 560, easing: 'cubic-bezier(.45, 0, .25, 1)', fill: 'forwards' }
      );
      sweep.finished.then(() => navigate(`/other-things${url.search}${url.hash}`), () => {});
    }

    document.addEventListener('click', enterLab, true);
    return () => {
      document.removeEventListener('click', enterLab, true);
      sweep?.cancel();
    };
  }, [key, labHref, navigate]);

  return <div className="lab-entrance-shadow" aria-hidden="true"><span ref={shade} /></div>;
}
