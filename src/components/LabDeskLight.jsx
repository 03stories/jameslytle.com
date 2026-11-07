import { useEffect, useRef } from 'react';

export default function LabDeskLight() {
  const light = useRef(null);

  useEffect(() => {
    const element = light.current;
    const motion = window.matchMedia('(any-hover: hover) and (any-pointer: fine) and (prefers-reduced-motion: no-preference)');
    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let x;
    let y;
    let previousTime = 0;

    function paint() {
      element.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -58%)`;
    }

    function follow(time) {
      const step = 1 - Math.exp(-Math.max(0, time - previousTime) / 240);
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
      x ??= window.innerWidth * .64;
      y ??= window.innerHeight * .49;
      if (!frame) {
        previousTime = performance.now();
        frame = requestAnimationFrame(follow);
      }
    }

    function park() {
      cancelAnimationFrame(frame);
      frame = 0;
      x = undefined;
      y = undefined;
      element.style.removeProperty('transform');
    }

    window.addEventListener('pointermove', aim, { passive: true });
    motion.addEventListener('change', park);
    return () => {
      window.removeEventListener('pointermove', aim);
      motion.removeEventListener('change', park);
      park();
    };
  }, []);

  return <div className="lab-desk-light" aria-hidden="true" ref={light} />;
}
