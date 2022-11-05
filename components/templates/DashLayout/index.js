import { Sidebar } from "components";

import styles from "./styles.module.scss";

function DashLayout({ children }) {
  return (
    <div className={styles.dashLayout}>
      <Sidebar />
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default DashLayout;
