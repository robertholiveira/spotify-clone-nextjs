import styles from "./styles.module.scss";

import logo from "public/images/spotify-comuna-logo.png";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img className={styles.logo} src={logo.src} />
    </div>
  );
}

export default Sidebar;
