'use client';

import { useEffect } from 'react';

export default function MotionLayer() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | undefined;
    const animations = new Set<Animation>();

    const setup = () => {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      animations.clear();
      if (preference.matches) return;

      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const animation = entry.target.animate([
            { opacity: 0, transform: 'translateY(24px)' },
            { opacity: 1, transform: 'translateY(0)' },
          ], { duration: 850, easing: 'cubic-bezier(.16,1,.3,1)' });
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
          observer?.unobserve(entry.target);
        });
      }, { threshold: 0.08 });

      document.querySelectorAll('.section-heading, .service, .experience-grid > div, .steps article, .contact').forEach(element => observer?.observe(element));
    };

    setup();
    preference.addEventListener('change', setup);
    return () => {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      preference.removeEventListener('change', setup);
    };
  }, []);
  return null;
}
