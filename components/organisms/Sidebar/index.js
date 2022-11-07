import styles from "./styles.module.scss";
import { RiHome4Line, RiSearchLine, RiUser3Line } from "react-icons/ri";

import logo from "public/images/spotify-logo.png";
import Link from "next/link";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img className={styles.logo} src={logo.src} />
      <ul className={styles.menu}>
        <li>
          <Link href="/dashboard">
            <RiHome4Line /> Início
          </Link>
        </li>
        <li>
          <Link href="/dashboard/search">
            <RiSearchLine /> Buscar
          </Link>
        </li>
        <li>
          <Link href="/dashboard/profile">
            <RiUser3Line /> Perfil
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
