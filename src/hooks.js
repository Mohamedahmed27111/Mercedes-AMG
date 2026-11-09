import { useEffect } from 'react';

const clamp = (n, min = 0, max = 1) => Math.min(max, Math.max(min, n));

// Adds `.in` to every [data-reveal] element the first time it scrolls into view.
export function useReveal() {
  useEffect(() => {
    document.documentElement.classList.add('js');
    const els = document.querySelectorAll('[data-reveal]');

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// Publishes scroll state as CSS variables so the stylesheet can drive motion.
//   --sy        scrollY in px (unitless)
//   --progress  page scroll progress 0..1
//   --p         per-element progress for any [data-progress] element
export function useScrollEffects(setScrolled, setActive, sectionIds) {
  useEffect(() => {
    const root = document.documentElement;
    const tracked = Array.from(document.querySelectorAll('[data-progress]'));
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const vh = window.innerHeight;
      const max = root.scrollHeight - vh;

      root.style.setProperty('--sy', y.toFixed(1));
      root.style.setProperty('--progress', max > 0 ? (y / max).toFixed(4) : '0');
      setScrolled(y > 40);

      tracked.forEach((el) => {
        const r = el.getBoundingClientRect();
        const mode = el.dataset.progress;
        const p =
          mode === 'center'
            ? clamp((vh * 0.6 - r.top) / r.height)
            : clamp((vh - r.top) / (vh + r.height));
        el.style.setProperty('--p', p.toFixed(4));
      });

      let current = '';
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= vh * 0.4) current = id;
      });
      setActive(current);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [setScrolled, setActive, sectionIds]);
}
