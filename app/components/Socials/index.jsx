import { socialsList } from "./socials";
import styles from "./socials.module.css";

function Socials() {
  return (
    <div className={styles.socialsList}>
      {socialsList.map((item) => (
        <a
          key={item.label}
          href={item.url}
          target="_blank"
          className={styles.socialItem}
        >
          <div className={styles.wrapIcon}>{item.icon}</div>
          {item.label}
        </a>
      ))}
    </div>
  );
}

export default Socials;
