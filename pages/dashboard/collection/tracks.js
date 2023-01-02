import { getSession } from "next-auth/react";
import Head from "next/head";

import { getUserTracks } from "@/services/spotify";
import Tracks from "@/components/pages/Collection/Tracks";

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  const userTracks = await getUserTracks(session, 50, 0);
  return { props: { userTracks } };
}

export default function TracksPage({ userTracks }) {
  return (
    <>
      <Head>
        <title>Músicas curtidas | Spotify</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Tracks userTracks={userTracks} />
    </>
  );
}
