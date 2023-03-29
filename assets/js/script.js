import { Cards } from "./Cards.js";
import { Icons } from "./Icons.js";
import { Footer } from "./Footer.js";

window.onload = () => {
  const animaCards = new Cards();
  document.addEventListener("scroll", animaCards.scrollCards.bind(animaCards));

  const icons = new Icons();
  icons.animaIcons();

  const footer = new Footer();
  footer.waveEffect();
};
