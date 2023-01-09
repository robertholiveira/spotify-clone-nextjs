import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { getArtistTopTracks } from "@/services/spotify";

import ListItem from "@/components/molecules/ListItem";
import noPicture from "public/images/no-picture-artist.jpg";
import getCountry from "@/utils/getCountry";

function ArtistItem({ artist }) {
  const [trackToPlay, setTrackToPlay] = useState(null);

  const { data: session } = useSession();
  const { locale } = useRouter();

  const country = getCountry(locale);

  const artistImage = artist.images.length
    ? artist.images[0].url
    : noPicture.src;

  useEffect(() => {
    const getTrack = async () => {
      if (session) {
        const topTracks = await getArtistTopTracks(
          session,
          country,
          artist.id,
          1
        );
        setTrackToPlay(topTracks[0]);
      }
    };
    getTrack();
  }, [artist, country, session, locale]);

  return (
    <ListItem
      image={artistImage}
      circleImage={true}
      link={`/dashboard/artist/${artist.id}`}
      title={artist.name}
      trackToPlay={trackToPlay}
    />
  );
}

export default ArtistItem;
