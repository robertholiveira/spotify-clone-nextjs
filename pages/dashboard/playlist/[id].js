import { getSession } from "next-auth/react";
import Head from "next/head";

import { getPlaylist } from "@/services/spotify";
import Playlist from "@/components/pages/Playlist";

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  const { id } = ctx.query;

  const playlist = await getPlaylist(session, id);

  return { props: { playlist } };
}

export default function PlaylistPage({ playlist }) {
  return (
    <>
      <Head>
        <title>{`${playlist.name} | Spotify`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Playlist playlist={playlist} />
    </>
  );
}
