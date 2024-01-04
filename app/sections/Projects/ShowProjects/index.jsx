import Image from "next/image";
import styles from "../projects.module.css";
import { projectsList } from "../projectsList";

function ShowProjects() {
  return (
    <>
      {projectsList.map((project) => (
        <li className={styles.projectItem}>
          <Image
            src={`/assets/${project.customer}.webp`}
            fill={true}
            className={styles.projectItemImage}
          />
          <div className={styles.projectItemFilter}>
            <Image
              src={`/assets/${project.customer}-logo.webp`}
              width="300"
              height="300"
              className={styles.logoImage}
            />
            <div className={styles.projectItemContent}>
              <h3>{project.title}</h3>
              <h4>{project.subtitle}</h4>
              <p>{project.description}</p>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}

export default ShowProjects;
