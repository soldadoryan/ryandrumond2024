import Image from "next/image";
import styles from "./projects.module.css";
import Animations from "@/app/ScrollingAnimation/animations.json";

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
      <section className={styles.projects} {...Animations.projectsList}>
        <div className={styles.wrapProjectList}>
          <ul className={styles.projectsList} {...Animations.projectsItems}>
            <li className={styles.projectItem}>
              <Image
                src="/assets/alpargatas.jpg"
                fill={true}
                className={styles.projectItemImage}
              />
              <div className={styles.projectItemFilter}>
                <Image
                  src="/assets/alpargatas-logo.png"
                  width="300"
                  height="300"
                  className={styles.logoImage}
                />
              </div>
              <div className={styles.projectItemContent}>
                <h3>Alpargatas | Havaianas</h3>
                <h4>Site Institucional | Portal de vendas</h4>
                <p>
                  Participação no desenvolvimento do portal de vendas B2B,
                  portal Havaconecta e manutenções no site institucional da
                  empresa Alpargatas{" "}
                  <b>como desenvolvedor front-end da ioasys</b>.
                </p>
              </div>
            </li>
            <li className={styles.projectItem}>
              <Image
                src="/assets/cvc.jpg"
                fill={true}
                className={styles.projectItemImage}
              />
              <div className={styles.projectItemFilter}>
                <Image
                  src="/assets/cvc-logo.png"
                  width="300"
                  height="300"
                  className={styles.logoImage}
                />
              </div>
              <div className={styles.projectItemContent}>
                <h3>CVC</h3>
                <h4>Sistema de criação de e-mails</h4>
                <p>
                  Participação no desenvolvimento do portal responsável por
                  gerir templates de e-mails para a comunicação da empresa com
                  seus clientes <b>como desenvolvedor front-end da ioasys</b>.
                </p>
              </div>
            </li>
            <li className={styles.projectItem}>
              <Image
                src="/assets/suvinil.jpg"
                fill={true}
                className={styles.projectItemImage}
              />
              <div className={styles.projectItemFilter}>
                <Image
                  src="/assets/suvinil-logo.png"
                  width="300"
                  height="300"
                  className={styles.logoImage}
                />
                <div className={styles.projectItemContent}>
                  <h3>Suvinil</h3>
                  <h4>Site Institucional | E-COMMERCE</h4>
                  <p>
                    Participação no desenvolvimento de novas funcionalidades do
                    e-commerce da Suvinil, uma das maiores empresas de tinta no
                    Brasil <b>como desenvolvedor front-end da ioasys</b>.
                  </p>
                </div>
              </div>
            </li>
            <li className={styles.projectItem}>
              <Image
                src="/assets/cotemig.png"
                fill={true}
                className={styles.projectItemImage}
              />
              <div className={styles.projectItemFilter}>
                <Image
                  src="/assets/cotemig-logo.png"
                  width="300"
                  height="300"
                  className={styles.logoImage}
                />
                <div className={styles.projectItemContent}>
                  <h3>Colégio e Faculdade COTEMIG</h3>
                  <h4>Aplicativo Mobile 2024</h4>
                  <p>
                    Desenvolvimento do novo aplicativo do colégio e faculdade
                    COTEMIG para alunos e professores como trabalho de conclusão
                    de curso.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Projects;
