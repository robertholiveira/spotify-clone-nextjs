import { getSession } from "next-auth/react";

import { getUserPlaylists } from "@/services/spotify";
import { Profile } from "@/components";

// This gets called on every request
export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  const playlists = await getUserPlaylists(session);

  return { props: { playlists, user: session.user } };
}

export default function ProfilePage({ playlists, user }) {
  return <Profile playlists={playlists} user={user} />;
}
