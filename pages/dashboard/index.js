import { getSession } from "next-auth/react";
import Head from "next/head";

import {
  getRecentlyPlayed,
  getRelatedArtists,
  getFeaturedPlaylists,
} from "@/services/spotify";
import Home from "@/components/pages/Home";
import ContentWrapper from "@/components/organisms/ContentWrapper";

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  let recentTracks = await getRecentlyPlayed(session, 6);
  recentTracks = recentTracks.map((el) => el.track);

  let relatedArtists = recentTracks[0].artists[0];
  relatedArtists.items = await getRelatedArtists(session, relatedArtists.id, 6);

  const featuredPlaylists = await getFeaturedPlaylists(session, "BR", 6);

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
        <title>Spotify </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ContentWrapper>
        <Home
          recentTracks={recentTracks}
          relatedArtists={relatedArtists}
          featuredPlaylists={featuredPlaylists}
          user={user}
        />
      </ContentWrapper>
    </>
  );
}
