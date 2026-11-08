import { useEffect, useRef, useState } from 'react';
import { useHref, useLocation } from 'react-router-dom';

async function playClick(audio, pressed) {
  if (!window.AudioContext) return;

  try {
    const context = audio.current ??= new AudioContext();
    if (context.state === 'suspended') await context.resume();
    const start = context.currentTime;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(pressed ? 587 : 440, start);
    oscillator.frequency.setValueAtTime(pressed ? 440 : 659, start + .014);
    gain.gain.setValueAtTime(.045, start);
    gain.gain.exponentialRampToValueAtTime(.001, start + .038);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start(start);
    oscillator.stop(start + .04);
  } catch {
    // Navigation still works if the browser blocks audio.
  }
}

export default function useLabSwitch(isLab) {
  const labHref = useHref('/other-things');
  const { key } = useLocation();
  const [pressedKey, setPressedKey] = useState(null);
  const audio = useRef(null);

  useEffect(() => () => {
    audio.current?.close().catch(() => {});
    audio.current = null;
  }, []);

  useEffect(() => {
    if (isLab) return;

    const labPath = new URL(labHref, window.location.href).pathname;
    let pointerId = null;
    let releaseFrame = 0;

    function reset() {
      cancelAnimationFrame(releaseFrame);
      pointerId = null;
      setPressedKey(null);
    }

    function press(event) {
      if (!event.isPrimary || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest?.('#primary-navigation a[href]');
      if (!link || (link.target && link.target !== '_self') || link.hasAttribute('download')) return;

      const url = new URL(link.href);
      if (url.origin !== window.location.origin || url.pathname !== labPath) return;

      cancelAnimationFrame(releaseFrame);
      pointerId = event.pointerId;
      setPressedKey(key);
      void playClick(audio, true);
    }

    function release(event) {
      if (event.pointerId !== pointerId || event.button !== 0) return;
      pointerId = null;
      void playClick(audio, false);
      // Let the link's click reach the router before clearing the pressed palette.
      releaseFrame = requestAnimationFrame(reset);
    }

    function cancel(event) {
      if (event.pointerId === pointerId) reset();
    }

    document.addEventListener('pointerdown', press, true);
    window.addEventListener('pointerup', release, true);
    window.addEventListener('pointercancel', cancel, true);
    window.addEventListener('blur', reset);
    return () => {
      document.removeEventListener('pointerdown', press, true);
      window.removeEventListener('pointerup', release, true);
      window.removeEventListener('pointercancel', cancel, true);
      window.removeEventListener('blur', reset);
      cancelAnimationFrame(releaseFrame);
      setPressedKey(current => current === key ? null : current);
    };
  }, [isLab, key, labHref]);

  return pressedKey === key;
}
