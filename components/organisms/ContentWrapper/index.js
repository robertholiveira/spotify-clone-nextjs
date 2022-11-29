import styles from "./styles.module.scss";

function ContentWrapper({ children }) {
  return <div className={styles.contentWrapper}>{children}</div>;
}

export default ContentWrapper;
