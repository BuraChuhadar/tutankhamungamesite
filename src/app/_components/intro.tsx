import { CMS_NAME } from "@/lib/constants";

import styles from "./decorative-elements.module.css";

export function Intro() {
  return (
    <section
      className={`dev-blog-intro-panel flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 relative p-8`}
    >      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 text-[#2d1c00] dark:text-[#f5e9d6]">
        Dev Blog
      </h1>{" "}
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 text-[#2d1c00] dark:text-[#f5e9d6]">
        Follow the journey as we build
        <span className={styles.hieroglyphicSprite}></span>
        <span className="text-[#c2881b] dark:text-[#c2881b] font-semibold">
          Tutankhamun: Builders of the Eternal
        </span>
        <span className={styles.hieroglyphicSprite}></span>
      </h4>
    </section>
  );
}
