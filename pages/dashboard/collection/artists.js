import { getSession } from "next-auth/react";
import Head from "next/head";

import { getUserArtists } from "@/services/spotify";
import Artists from "@/components/pages/Collection/Artists";

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  const artists = await getUserArtists(session, 50);
  return { props: { artists } };
}

export default function ArtistsPage({ artists }) {
  return (
    <>
      <Head>
        <title>Meus artistas | Spotify</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Artists artists={artists} />
    </>
  );
}
