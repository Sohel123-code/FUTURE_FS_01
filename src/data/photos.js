import portraitSmall from "../assets/portraits/eshaq-portrait-480.webp";
import portraitLarge from "../assets/portraits/eshaq-portrait-960.webp";
import outdoorsSmall from "../assets/portraits/eshaq-outdoors-480.webp";
import outdoorsLarge from "../assets/portraits/eshaq-outdoors-960.webp";

export const portrait = {
  src: portraitLarge,
  srcSet: `${portraitSmall} 480w, ${portraitLarge} 960w`,
};
export const outdoors = {
  src: outdoorsLarge,
  srcSet: `${outdoorsSmall} 480w, ${outdoorsLarge} 960w`,
};
