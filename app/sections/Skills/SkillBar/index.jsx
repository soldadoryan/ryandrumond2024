import styles from "./skillbar.module.css";

function SkillBar({ label, value }) {
  return (
    <li className={styles.container}>
      <b>{label}</b>
      <div className={styles.bar}>
        <div className={styles.contentBar} style={{ width: `${value}%` }}></div>
      </div>
    </li>
  );
}

export default SkillBar;
