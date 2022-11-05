import styles from "./styles.module.scss";

function AuthLayout({ children }) {
  return <div className={styles.authLayout}>{children}</div>;
}

export default AuthLayout;
