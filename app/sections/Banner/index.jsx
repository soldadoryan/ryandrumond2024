import Image from "next/image";
import styles from "./banner.module.css";
import Animations from "../../ScrollingAnimation/animations.json";

function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.bgBanner} {...Animations.bgBanner}></div>
      <div
        className={styles.filterBgBanner}
        {...Animations.filterBgBanner}
      ></div>
      <main className={styles.mainContent}>
        <Image src="/assets/logo.webp" width="300" height="157" />
        <h1 className={styles.title}>Ryan</h1>
        <h2 className={styles.subtitle}>DESENVOLVEDOR FRONT-END / MOBILE</h2>
        <div className={styles.scrollIndicator} {...Animations.scrollIndicator}>
          Desce aí!
          <div className={styles.mouseIndicator}>
            <div className={styles.wheel}></div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Banner;
