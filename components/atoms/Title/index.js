import styles from "./styles.module.scss";

function Title({ children }) {
  return <h3 className={styles.title}>{children}</h3>;
}

export default Title;
