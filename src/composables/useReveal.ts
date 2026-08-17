import { onMounted, onUnmounted } from 'vue';

export function useReveal(): void {
  let observer: IntersectionObserver | undefined;

  onMounted(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal');
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('visible'));
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    elements.forEach((element) => observer?.observe(element));
  });

  onUnmounted(() => observer?.disconnect());
}
