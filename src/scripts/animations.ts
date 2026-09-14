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

  // Desktop Motion (> 992px)
  mm.add('(min-width: 992px)', () => {
    // 1. Staged Hero Sequence
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    if (document.querySelector('.hero-eyebrow')) {
      heroTl.fromTo(
        '.hero-eyebrow',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.1 }
      );
    }
    
    if (document.querySelector('.hero-title-line')) {
      heroTl.fromTo(
        '.hero-title-line',
        { opacity: 0, y: 40, skewY: 2 },
        { opacity: 1, y: 0, skewY: 0, duration: 0.8, stagger: 0.12 },
        '-=0.3'
      );
    }
    
    if (document.querySelector('.hero-lead')) {
      heroTl.fromTo(
        '.hero-lead',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      );
    }
    
    if (document.querySelector('.hero-actions')) {
      heroTl.fromTo(
        '.hero-actions',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      );
    }

    if (document.querySelector('.hero-media-card')) {
      heroTl.fromTo(
        '.hero-media-card',
        { opacity: 0, scale: 0.95, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'power2.out' },
        '-=0.7'
      );
    }

    // 2. Metrics Counter Animation
    const metricCards = document.querySelectorAll('.metric-item');
    if (metricCards.length > 0) {
      ScrollTrigger.create({
        trigger: '.metrics-band',
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.fromTo(
            metricCards,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power2.out' }
          );
        }
      });
    }

    // 3. Editorial Section Reveals
    const revealSections = document.querySelectorAll('.editorial-reveal');
    revealSections.forEach((sec) => {
      gsap.fromTo(
        sec,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sec,
            start: 'top 82%',
            toggleActions: 'play none none none',
            once: true
          }
        }
      );
    });

    // 4. Practical Story Progression (Subtle Sticky Narrative)
    const storySteps = document.querySelectorAll('.story-step-item');
    if (storySteps.length > 0) {
      storySteps.forEach((step, idx) => {
        ScrollTrigger.create({
          trigger: step,
          start: 'top 70%',
          end: 'bottom 40%',
          toggleClass: { targets: step, className: 'is-active-step' },
          onEnter: () => {
            const previewTarget = (step as HTMLElement).dataset.targetImage;
            if (previewTarget) {
              const allPreviews = document.querySelectorAll('.story-preview-media');
              allPreviews.forEach((p) => p.classList.remove('is-visible'));
              const activeMedia = document.getElementById(previewTarget);
              if (activeMedia) activeMedia.classList.add('is-visible');
            }
          }
        });
      });
    }

    // 5. Course Cards Staggered Reveal
    const courseCards = document.querySelectorAll('.course-card');
    if (courseCards.length > 0) {
      ScrollTrigger.batch(courseCards, {
        start: 'top 90%',
        once: true,
        onEnter: (batch) => {
          gsap.from(batch, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
          });
        }
      });
    }
  });

  // Mobile / Tablet (< 991px) - Clean, fast vertical reveals without scroll-jacking
  mm.add('(max-width: 991px)', () => {
    // Staged hero with quicker duration
    gsap.fromTo(
      ['.hero-eyebrow', '.hero-title', '.hero-lead', '.hero-cta-group'],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out', delay: 0.1 }
    );

    // Section triggers
    const reveals = document.querySelectorAll('.editorial-reveal, .metric-item, .pillar-card, .review-card');
    reveals.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.from(el, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: 'power2.out'
          });
        }
      });
    });
  });

  return () => {
    mm.revert();
  };
}
