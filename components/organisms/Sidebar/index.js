import { RiHome4Line, RiSearchLine, RiUser3Line } from "react-icons/ri";
import Link from "next/link";
import { useSession } from "next-auth/react";

import styles from "./styles.module.scss";
import logo from "public/images/spotify-logo.png";
import { ProfileCard } from "@/components";

function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className={styles.sidebar}>
      <div>
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
      <ProfileCard user={session?.user} />
    </div>
  );
}

export default Sidebar;
