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
    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(pressed ? 580 : 720, start);
    oscillator.frequency.exponentialRampToValueAtTime(pressed ? 165 : 235, start + .018);
    gain.gain.setValueAtTime(.11, start);
    gain.gain.exponentialRampToValueAtTime(.001, start + .032);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start(start);
    oscillator.stop(start + .035);
  } catch {
    // Navigation still works if the browser blocks audio.
  }
}

export default function useLabSwitch(isLab) {
  const homeHref = useHref('/');
  const { key } = useLocation();
  const [pressedKey, setPressedKey] = useState(null);
  const audio = useRef(null);

  useEffect(() => () => {
    audio.current?.close().catch(() => {});
    audio.current = null;
  }, []);

  useEffect(() => {
    const basePath = new URL(homeHref, window.location.href).pathname;
    let pointerId = null;
    let releaseFrame = 0;

    function reset() {
      cancelAnimationFrame(releaseFrame);
      pointerId = null;
      setPressedKey(null);
    }

    function press(event) {
      if (!event.isPrimary || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest?.('#primary-navigation a[href], a.site-name-link[href]');
      if (!link || (link.target && link.target !== '_self') || link.hasAttribute('download')) return;

      const url = new URL(link.href);
      if (url.origin !== window.location.origin || !url.pathname.startsWith(basePath)) return;
      const destination = url.pathname.slice(basePath.length).replace(/\/$/, '');
      const crossesTheme = isLab ? ['', 'projects', 'about'].includes(destination) : destination === 'other-things';
      if (!crossesTheme) return;

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
  }, [homeHref, isLab, key]);

  return pressedKey === key;
}
