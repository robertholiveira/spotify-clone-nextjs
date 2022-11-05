import Head from "next/head";

import { signIn } from "next-auth/react";

import logo from "public/images/spotify-comuna-logo.png";

import styles from "./styles.module.scss";

function LoginPage() {
  const handleLogin = () => {
    signIn("spotify", { callbackUrl: "/dashboard/profile" });
  };

  return (
    <div>
      <Head>
        <title>Login | Spotify </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <img className={styles.logo} src={logo.src} />
      <button onClick={handleLogin} className={styles.button}>
        Fazer login no Spotify
      </button>
      <p>
        Ao clicar no botão acima você será redirecionado para a página de Login
        do Spotify.
      </p>
    </div>
  );
}

export default LoginPage;
