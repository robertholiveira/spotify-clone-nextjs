import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

function CollectionMenu() {
  const router = useRouter();
  const { t } = useTranslation("common");

  const menu = [
    {
      label: t("collection.menu.playlists"),
      path: "/dashboard/collection/playlists",
    },
    {
      label: t("collection.menu.artists"),
      path: "/dashboard/collection/artists",
    },
  ];

  return (
    <div className={styles.collectionMenu}>
      <ul>
        {menu.map((link, index) => {
          return (
            <li
              key={index}
              className={router.pathname == link.path ? styles.active : ""}
            >
              <Link href={link.path}>{link.label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CollectionMenu;
