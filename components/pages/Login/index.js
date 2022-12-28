import { signIn } from "next-auth/react";
import useTranslation from "next-translate/useTranslation";

import logo from "public/images/spotify-logo.png";

import styles from "./styles.module.scss";

function Login() {
  const { t } = useTranslation("login");

  const handleLogin = () => {
    signIn("spotify", { callbackUrl: "/dashboard/profile" });
  };

  return (
    <>
      <img className={styles.logo} src={logo.src} />
      <button onClick={handleLogin} className={styles.button}>
        {t("buttonLogin")}
      </button>
      <p>{t("explanationLogin")}</p>
    </>
  );
}

export default Login;
