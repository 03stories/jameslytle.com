export function observeViewportVideo(video) {
  if (!('IntersectionObserver' in window)) return () => {};

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let inView = false;
  let active = true;

  const updatePlayback = () => {
    if (!inView || reducedMotion.matches) {
      video.pause();
      return;
    }

    video.muted = true;
    video.play().then(() => {
      // Scrolling away while playback loads must still leave the video paused.
      if (!active || !inView || reducedMotion.matches) video.pause();
    }).catch(() => {
      // Native controls remain available if the browser declines autoplay.
    });
  };

  const observer = new IntersectionObserver(([entry]) => {
    const nextInView = entry.isIntersecting && entry.intersectionRatio >= 0.35;
    if (nextInView === inView) return;
    inView = nextInView;
    updatePlayback();
  }, { threshold: [0, 0.35] });

  observer.observe(video);
  reducedMotion.addEventListener('change', updatePlayback);

  return () => {
    active = false;
    observer.disconnect();
    reducedMotion.removeEventListener('change', updatePlayback);
    video.pause();
  };
}
