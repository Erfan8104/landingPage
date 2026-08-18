import type { Directive } from "vue";

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        // Remove class when scrolling past so it can re-trigger next time
        entry.target.classList.remove("in-view");
      }
    }
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px", // Triggers slightly before it hits the bottom of the screen
  },
);

export const vReveal: Directive<HTMLElement, number | void> = {
  mounted(el, binding) {
    el.classList.add("reveal");
    if (typeof binding.value === "number") {
      el.style.transitionDelay = `${binding.value}ms`;
    }
    observer.observe(el);
  },
  unmounted(el) {
    observer.unobserve(el);
  },
};
