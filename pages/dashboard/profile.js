import { getSession } from "next-auth/react";

import { getUserTopTracks, getUserTopArtists } from "@/services/spotify";
import Profile from "@/components/pages/Profile";

// This gets called on every request
export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  const topTracks = await getUserTopTracks(session, 10);
  const topArtists = await getUserTopArtists(session, 6);

  return { props: { topTracks, topArtists, user: session.user } };
}

export default function ProfilePage({ topTracks, topArtists, user }) {
  return <Profile topTracks={topTracks} topArtists={topArtists} user={user} />;
}
