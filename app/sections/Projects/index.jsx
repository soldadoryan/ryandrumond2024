import Image from "next/image";
import styles from "./projects.module.css";
import Animations from "@/app/ScrollingAnimation/animations.json";
import ShowProjects from "./ShowProjects";

function Projects() {
  return (
    <>
      <div className={styles.bgTop} {...Animations.projectsBgTop}></div>
      <div className={styles.bgBottom} {...Animations.projectsBgBottom}></div>
      <div className={styles.titleTop} {...Animations.projectsTitleTop}>
        Projetos
      </div>
      <div className={styles.titleBottom} {...Animations.projectsTitleBottom}>
        Importantes
      </div>
      <div className={styles.wrapSection} {...Animations.wrapSectionProjects}>
        <section className={styles.projects} {...Animations.projectsList}>
          <div className={styles.wrapProjectList}>
            <ul className={styles.projectsList} {...Animations.projectsItems}>
              <ShowProjects />
            </ul>
            <ul
              className={`${styles.projectsListMobile} ${styles.projectsList}`}
              {...Animations.projectsItemsMobile}
            >
              <ShowProjects />
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default Projects;
