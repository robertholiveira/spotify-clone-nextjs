import logo from "public/images/spotify-comuna-logo.png";

import styles from "./styles.module.scss";

function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <img className={styles.logo} src={logo.src} />
      <a href={process.env.REACT_APP_AUTH_API_URL} className={styles.button}>
        Fazer login no Spotify
      </a>
      <p>
        Ao clicar no botão acima você será redirecionado para a página de Login
        do Spotify.
      </p>
    </div>
  );
}

export default LoginPage;
