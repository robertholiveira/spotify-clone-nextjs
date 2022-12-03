import List from "@/components/organisms/List";
import TrackTable from "@/components/organisms/TrackTable";

import styles from "./styles.module.scss";

function Profile({ topTracks, topArtists, user }) {
  return (
    <>
      <div className={styles.profileBox}>
        <img src={user.image} />
        <h2>{user.name}</h2>
      </div>

      <List
        items={topArtists}
        type="artist"
        title="Artistas mais escutados por você"
      />
      <TrackTable tracks={topTracks} title="Músicas mais escutadas por você" />
    </>
  );
}

export default Profile;
