import type { Directive } from 'vue'

/**
 * v-reveal
 * Adds the `reveal` class immediately and toggles `in-view` once the
 * element scrolls into the viewport. Used for the subtle fade/slide-in
 * treatment across landing page sections (see frontend-design guidance:
 * motion should be deliberate, not decorative).
 */
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
        observer.unobserve(entry.target)
      }
    }
  },
  { threshold: 0.15 },
)

export const vReveal: Directive<HTMLElement, number | void> = {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (typeof binding.value === 'number') {
      el.style.transitionDelay = `${binding.value}ms`
    }
    observer.observe(el)
  },
  unmounted(el) {
    observer.unobserve(el)
  },
}
