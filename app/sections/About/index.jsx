import Image from "next/image";
import styles from "./about.module.css";
import Animations from "../../ScrollingAnimation/animations.json";
import Socials from "@/app/components/Socials";

function About() {
  return (
    <section className={styles.about} {...Animations.aboutSection}>
      <Image
        src="/assets/me.webp"
        title="Ryan Drumond"
        alt="Foto de Ryan Drumond de frente olhando para a câmera sorrindo com uma camisa preta"
        width="500"
        height="666"
        className={styles.aboutImage}
        {...Animations.aboutComponents}
      />
      <div className={styles.aboutContent} {...Animations.aboutComponents}>
        <h1 className={styles.aboutTitle}>Ryan Drumond</h1>
        <h2 className={styles.aboutSubtitle}>
          DESENVOLVEDOR FRONT-END / MOBILE
        </h2>
        <p className={styles.aboutParagraph}>
          Sou mineiro de BH, tenho 26 anos e 13 anos de experiência em
          desenvolvimento de aplicações. Atualmente, atuo como desenvolvedor
          front-end na{" "}
          <a href="https://ioasys.com.br" target="_blank">
            ioasys
          </a>{" "}
          - empresa brasileira de inovação tecnológica especializada na criação
          e desenvolvimento de aplicativos e demais componentes do universo
          digital. Também faço parte do Comitê Front-end da ioasys, comitê este
          responsável pela definição de regras e boas práticas de toda a equipe
          Front-end.
        </p>
        <p className={styles.aboutParagraph}>
          Tenho mais de <b>oito anos</b> de experiência em desenvolvimento
          back-end. Possuo especialização em ReactJS, NodeJS e React Native pela
          Rocketseat e, além disso, sou graduado em Sistemas de Informação pela
          Faculdade Cotemig.
        </p>
        <p className={styles.aboutParagraph}>
          Empreendo no setor de tecnologia desde a adolescência e, enquanto
          estudante de Sistemas de Informação, conquistei{" "}
          <b>o primeiro lugar no Hackathon COTEMIG - PRODABEL - SIMI</b>. Como
          recompensa, ganhei o passaporte para a Campus Party SP, tive o
          privilégio de conhecer as instalações da Microsoft Brasil e participar
          de uma reunião com os líderes dessa multinacional.
        </p>
        <Socials />
      </div>
    </section>
  );
}

export default About;
