import useTranslation from "next-translate/useTranslation";

import Carrousel from "@/components/organisms/Carrousel";
import TrackTable from "@/components/organisms/TrackTable";

import styles from "./styles.module.scss";

function Profile({ topTracks, topArtists, user }) {
  const { t } = useTranslation("profile");

  return (
    <>
      <div className={styles.profileBox}>
        <img src={user.image} />
        <h2>{user.name}</h2>
      </div>

      <Carrousel items={topArtists} type="artist" title={t("topArtists")} />
      <TrackTable tracks={topTracks} title={t("topTracks")} />
    </>
  );
}

export default Profile;
