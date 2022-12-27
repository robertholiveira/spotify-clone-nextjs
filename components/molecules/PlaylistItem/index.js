import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { getPlaylistTracks } from "@/services/spotify";

import ListItem from "../ListItem";
import noPicture from "public/images/no-picture-artist.jpg";

function PlaylistItem({ playlist }) {
  const [trackToPlay, setTrackToPlay] = useState(null);
  const { data: session } = useSession();

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
  }, [session]);

  return (
    <ListItem
      image={playlistImage}
      link={`/dashboard/playlist/${playlist.id}`}
      title={playlist.name}
      subTitle={playlist.description}
      trackToPlay={trackToPlay}
    />
  );
}

export default PlaylistItem;
