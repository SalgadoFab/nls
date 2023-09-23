import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

//Helper para hacer scroll suave a cualquier sección
export const handleScroll = section => {
  if (section) {
    gsap.to(window, {
      duration: 2.5,
      scrollTo: {
        y: `#${section}`,
      },
      ease: "power2.inOut"
    });
  }
};