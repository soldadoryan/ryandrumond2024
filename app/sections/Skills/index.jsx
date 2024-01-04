import styles from "./skills.module.css";
import Animations from "../../ScrollingAnimation/animations.json";
import SkillBar from "./SkillBar";
import { RiAttachment2 } from "react-icons/ri";

function Skills() {
  return (
    <section className={styles.skills} {...Animations.skillsSection}>
      <div className={styles.background} {...Animations.skillsBackground}></div>
      <div className={styles.wrapSkills} {...Animations.skillsContent}>
        <div className={styles.contentSkills}>
          <h3>Competências</h3>
          <p className={styles.paragraph}>
            Desenvolvimento de <b>aplicações web e desktop</b> utilizando as
            principais frameworks do mercado como:{" "}
            <b>ReactJS, NextJS e Electron.</b> Para estilização, alguns recursos
            e bibliotecas importantes como:{" "}
            <b>CSS Modules, Sass, Styled Components e Tailwind</b>; Para os
            testes unitários e de integração:{" "}
            <b>JEST, Testing Library e Cypress</b>. Para interfaces mobile,{" "}
            <b>React Native e EXPO</b>.
          </p>
          <ul className={styles.skillsBars}>
            <SkillBar label="Desenvolvimento Front-end" value={97} />
            <SkillBar label="Otimização de códigos" value={90} />
            <SkillBar label="Testes automatizados" value={85} />
            <SkillBar label="Trabalho em equipe" value={90} />
            <SkillBar label="Desenvolvimento Back-end" value={70} />
            <SkillBar label="Comunicação" value={80} />
          </ul>
          <a
            href="/assets/ryan_drumond_2024.pdf"
            target="_blank"
            className={styles.btnResume}
          >
            <RiAttachment2 />
            Baixar currículo
          </a>
        </div>
      </div>
    </section>
  );
}

export default Skills;
