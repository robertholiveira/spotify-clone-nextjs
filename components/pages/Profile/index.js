import Head from "next/head";

import { TrackTable, ArtistsList } from "@/components";
import styles from "./styles.module.scss";

function Profile({ topTracks, topArtists, user }) {
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

      <ArtistsList
        artists={topArtists}
        title="Artistas mais escutados por você"
      />
      <TrackTable tracks={topTracks} title="Músicas mais escutadas por você" />
    </>
  );
}

export default Profile;
