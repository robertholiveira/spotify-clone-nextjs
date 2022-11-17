import { signIn } from "next-auth/react";

import logo from "public/images/spotify-logo.png";

import styles from "./styles.module.scss";

function Login() {
  const handleLogin = () => {
    signIn("spotify", { callbackUrl: "/dashboard/profile" });
  };

  return (
    <>
      <img className={styles.logo} src={logo.src} />
      <button onClick={handleLogin} className={styles.button}>
        Fazer login no Spotify
      </button>
      <p>
        Ao clicar no botão acima você será redirecionado para a página de Login
        do Spotify.
      </p>
    </>
  );
}

export default Login;
