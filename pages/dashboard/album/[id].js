import { getSession } from "next-auth/react";
import Head from "next/head";

import { getAlbum } from "@/services/spotify";
import Album from "@/components/pages/Album";

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  const { id } = ctx.query;

  const album = await getAlbum(session, id);

  return { props: { album } };
}

export default function AlbumPage({ album }) {
  return (
    <>
      <Head>
        <title>{`${album.name} | Spotify`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Album album={album} />
    </>
  );
}
