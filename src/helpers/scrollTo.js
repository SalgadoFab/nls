import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

//Helper para hacer scroll suave a cualquier sección
export const setScrollTo = section => {
  if (section) {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: `#${section}`,
      },
      ease: "power2.inOut"
    });
  }
};