import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins safely on client side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function initGlobalAnimations() {
  if (typeof window === 'undefined') return;

  // Check prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    console.info('Elite ESHM: Prefers-reduced-motion enabled. Animations bypassed.');
    return;
  }

  const mm = gsap.matchMedia();

  // Desktop Motion (> 768px)
  mm.add('(min-width: 768px)', () => {
    // 1. Staged Hero Sequence
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (document.querySelector('.hero-headline')) {
      heroTl.fromTo(
        '.hero-headline',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1 }
      );
    }

    if (document.querySelector('.hero-serif-lead')) {
      heroTl.fromTo(
        '.hero-serif-lead',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.5'
      );
    }

    if (document.querySelector('.hero-actions')) {
      heroTl.fromTo(
        '.hero-actions',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.4'
      );
    }

    if (document.querySelector('.stepped-collage')) {
      heroTl.fromTo(
        '.stepped-collage',
        { opacity: 0, scale: 0.96, y: 25 },
        { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: 'power2.out' },
        '-=0.6'
      );
    }

    // 2. Unboxed Statistics Stagger
    const statItems = document.querySelectorAll('.unboxed-stat-item');
    if (statItems.length > 0) {
      ScrollTrigger.create({
        trigger: '.manifesto-section',
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.fromTo(
            statItems,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out' }
          );
        }
      });
    }

    // 3. Course Cards Subtle Stagger
    const cards = document.querySelectorAll('.cib-course-card');
    if (cards.length > 0) {
      ScrollTrigger.create({
        trigger: '.courses-editorial-grid',
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
          );
        }
      });
    }

    // 4. Experience Columns Stagger
    const expCols = document.querySelectorAll('.exp-column');
    if (expCols.length > 0) {
      ScrollTrigger.create({
        trigger: '.unboxed-experience-grid',
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.fromTo(
            expCols,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out' }
          );
        }
      });
    }

    // 5. Google Reviews Stagger
    const reviewItems = document.querySelectorAll('.editorial-review-item');
    if (reviewItems.length > 0) {
      ScrollTrigger.create({
        trigger: '.editorial-reviews-grid',
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.fromTo(
            reviewItems,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out' }
          );
        }
      });
    }
  });

  return () => {
    mm.revert();
  };
}
