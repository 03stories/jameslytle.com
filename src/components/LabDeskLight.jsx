import { useEffect, useRef } from 'react';

export default function LabDeskLight() {
  const light = useRef(null);

  useEffect(() => {
    const element = light.current;
    const motion = window.matchMedia('(any-hover: hover) and (any-pointer: fine) and (prefers-reduced-motion: no-preference)');
    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;
    let previousTime = 0;

    function paint() {
      element.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -58%)`;
    }

    function follow(time) {
      const step = 1 - Math.exp(-(time - previousTime) / 90);
      previousTime = time;
      x += (targetX - x) * step;
      y += (targetY - y) * step;
      if (Math.hypot(targetX - x, targetY - y) < 0.5) {
        x = targetX;
        y = targetY;
        frame = 0;
      } else {
        frame = requestAnimationFrame(follow);
      }
      paint();
    }

    function aim(event) {
      if (!motion.matches || event.pointerType !== 'mouse') return;
      targetX = event.clientX;
      targetY = event.clientY;
      if (!element.hasAttribute('data-lit')) {
        x = targetX;
        y = targetY;
        paint();
        element.setAttribute('data-lit', '');
      } else if (!frame) {
        previousTime = performance.now();
        frame = requestAnimationFrame(follow);
      }
    }

    function dim() {
      element.removeAttribute('data-lit');
      cancelAnimationFrame(frame);
      frame = 0;
    }

    window.addEventListener('pointermove', aim, { passive: true });
    window.addEventListener('blur', dim);
    document.documentElement.addEventListener('pointerleave', dim);
    motion.addEventListener('change', dim);
    return () => {
      window.removeEventListener('pointermove', aim);
      window.removeEventListener('blur', dim);
      document.documentElement.removeEventListener('pointerleave', dim);
      motion.removeEventListener('change', dim);
      dim();
    };
  }, []);

  return <div className="lab-desk-light" aria-hidden="true" ref={light} />;
}
