import useTranslation from "next-translate/useTranslation";

import styles from "./styles.module.scss";

import logo from "public/images/spotify-logo.png";

function MobileMessage() {
  const { t } = useTranslation("common");

  return (
    <div className={styles.mobileMessage}>
      <img className={styles.logo} src={logo.src} />
      <h2 className={styles.title}>{t("mobileMessage")}</h2>
    </div>
  );
}

export default MobileMessage;
