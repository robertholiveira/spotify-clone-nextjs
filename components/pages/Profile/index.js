import Head from "next/head";

import styles from "./styles.module.scss";

function Profile({ playlists, user }) {
  return (
    <>
      <Head>
        <title>Perfil | Spotify </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={styles.profileBox}>
        <img src={user.image} />
        <h2>{user.name}</h2>
      </div>

      {playlists.map((playlist, index) => (
        <p key={index}>{playlist.name}</p>
      ))}
    </>
  );
}

export default Profile;
