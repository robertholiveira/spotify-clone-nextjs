import { getSession } from "next-auth/react";
import Head from "next/head";

import {
  getRecentlyPlayed,
  getRelatedArtists,
  getFeaturedPlaylists,
} from "@/services/spotify";
import Home from "@/components/pages/Home";
import getCountry from "@/utils/getCountry";

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  const locale = ctx.locale;

  const country = getCountry(locale);

  let recentTracks = await getRecentlyPlayed(session, 10);
  recentTracks = recentTracks.map((el) => el.track);

  let relatedArtists = recentTracks[0].artists[0];
  relatedArtists.items = await getRelatedArtists(
    session,
    relatedArtists.id,
    10
  );

  const featuredPlaylists = await getFeaturedPlaylists(session, country, 10);

  return {
    props: {
      recentTracks,
      relatedArtists,
      featuredPlaylists,
      user: session.user,
    },
  };
}

export default function HomePage({
  recentTracks,
  relatedArtists,
  featuredPlaylists,
  user,
}) {
  return (
    <>
      <Head>
        <title>Spotify</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Home
        recentTracks={recentTracks}
        relatedArtists={relatedArtists}
        featuredPlaylists={featuredPlaylists}
        user={user}
      />
    </>
  );
}
