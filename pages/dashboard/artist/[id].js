import { getSession } from "next-auth/react";
import Head from "next/head";

import {
  getArtist,
  getArtistTopTracks,
  getArtistAlbums,
} from "@/services/spotify";
import Artist from "@/components/pages/Artist";

// This gets called on every request
export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  const { id } = ctx.query;

  const artist = await getArtist(session, id);

  const topTracks = await getArtistTopTracks(session, "br", id, 5);

  const albums = await getArtistAlbums(session, id, 50);

  return { props: { artist, topTracks, albums } };
}

export default function ArtistPage({ artist, topTracks, albums }) {
  return (
    <>
      <Head>
        <title>{`${artist.name} | Spotify`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Artist artist={artist} topTracks={topTracks} albums={albums} />
    </>
  );
}
