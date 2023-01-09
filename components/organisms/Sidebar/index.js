import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { RiHome4Line, RiSearchLine, RiUser3Line } from "react-icons/ri";
import { IoAlbumsOutline } from "react-icons/io5";

import { useAudio } from "@/lib/AudioContext";
import styles from "./styles.module.scss";
import logo from "public/images/spotify-logo.png";
import likedSongsImage from "@/public/images/liked-songs-cover.jpg";

import LanguageSwitch from "@/components/molecules/LanguageSwitch";

function Sidebar() {
  const { t } = useTranslation("common");
  const { currentTrack } = useAudio();

  return (
    <div className={styles.sidebar}>
      <div>
        <LanguageSwitch alternativeLayout={true} />
        <Image
          width={300}
          height={300}
          className={styles.logo}
          src={logo.src}
        />
        <ul className={styles.menu}>
          <li>
            <Link href="/dashboard">
              <RiHome4Line /> {t("sidebar.menu.home")}
            </Link>
          </li>
          <li>
            <Link href="/dashboard/search">
              <RiSearchLine /> {t("sidebar.menu.search")}
            </Link>
          </li>
          <li>
            <Link href="/dashboard/profile">
              <RiUser3Line /> {t("sidebar.menu.profile")}
            </Link>
          </li>
          <li>
            <Link href="/dashboard/collection/playlists">
              <IoAlbumsOutline /> {t("sidebar.menu.library")}
            </Link>
          </li>
          <li>
            <Link href="/dashboard/collection/tracks">
              <Image
                width={100}
                height={100}
                src={likedSongsImage.src}
                className={styles.likedSongsIcon}
              />{" "}
              {t("sidebar.menu.likedSongs")}
            </Link>
          </li>
        </ul>
      </div>

      <Image
        width={400}
        height={400}
        src={currentTrack ? currentTrack.album.images[0].url : ""}
        className={`${styles.cover} ${currentTrack && styles.active}`}
      />
    </div>
  );
}

export default Sidebar;
