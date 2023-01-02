import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { getPlaylistTracks } from "@/services/spotify";

import ListItem from "../ListItem";
import noPicture from "public/images/no-picture-artist.jpg";

function PlaylistItem({ playlist }) {
  const [trackToPlay, setTrackToPlay] = useState(null);
  const { data: session } = useSession();
  const { locale } = useRouter();

  const playlistImage = playlist.images.length
    ? playlist.images[0].url
    : noPicture.src;

  useEffect(() => {
    const getTrack = async () => {
      if (session) {
        const tracks = await getPlaylistTracks(session, playlist.id, 1);
        setTrackToPlay(tracks[0]);
      }
    };
    getTrack();
  }, [session, locale]);

  const getSubTitle = () => {
    if (playlist.description) return playlist.description;
    return `De ${playlist.owner.display_name}`;
  };

  return (
    <ListItem
      image={playlistImage}
      link={`/dashboard/playlist/${playlist.id}`}
      title={playlist.name}
      subTitle={getSubTitle()}
      limitedText={true}
      trackToPlay={trackToPlay}
    />
  );
}

export default PlaylistItem;
