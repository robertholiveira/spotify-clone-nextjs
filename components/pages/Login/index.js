import { signIn } from "next-auth/react";
import useTranslation from "next-translate/useTranslation";
import { getCookie } from "cookies-next";

import LanguageSwitch from "@/components/molecules/LanguageSwitch";

import logo from "public/images/spotify-logo.png";

import styles from "./styles.module.scss";

function Login() {
  const { t } = useTranslation("login");

  const handleLogin = () => {
    const cookieLocale = getCookie("NEXT_LOCALE");
    signIn("spotify", { callbackUrl: `/${cookieLocale}/dashboard/profile` });
  };

  return (
    <>
      <img className={styles.logo} src={logo.src} />
      <button onClick={handleLogin} className={styles.button}>
        {t("buttonLogin")}
      </button>
      <p>{t("explanationLogin")}</p>
      <div className={styles.languageSwitch}>
        <LanguageSwitch />
      </div>
    </>
  );
}

export default Login;
