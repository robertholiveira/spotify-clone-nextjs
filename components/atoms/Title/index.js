import styles from "./styles.module.scss";

function Title({ children, className }) {
  return <h3 className={`${styles.title} ${className}`}>{children}</h3>;
}

export default Title;
