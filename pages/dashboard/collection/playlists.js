import { getSession } from "next-auth/react";
import Head from "next/head";

import { getUserPlaylists, getUserTracks } from "@/services/spotify";
import Playlists from "@/components/pages/Collection/Playlists";

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  const playlists = await getUserPlaylists(session, 50, 0);
  const tracks = await getUserTracks(session, 10, 0);
  return { props: { playlists, tracks } };
}

export default function PlaylistsPage({ playlists, tracks }) {
  return (
    <>
      <Head>
        <title>Minhas Playlists | Spotify</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Playlists playlists={playlists} tracks={tracks} />
    </>
  );
}
