import { getSession } from "next-auth/react";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

import { getUserTopTracks, getUserTopArtists } from "@/services/spotify";
import Profile from "@/components/pages/Profile";
import ContentWrapper from "@/components/organisms/ContentWrapper";

// This gets called on every request
export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  const topTracks = await getUserTopTracks(session, 10);
  const topArtists = await getUserTopArtists(session, 6);

  return { props: { topTracks, topArtists, user: session.user } };
}

export default function ProfilePage({ topTracks, topArtists, user }) {
  const { t } = useTranslation("profile");

  return (
    <>
      <Head>
        <title>{`${t(t("titlePage"))} | Spotify `}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ContentWrapper>
        <Profile topTracks={topTracks} topArtists={topArtists} user={user} />
      </ContentWrapper>
    </>
  );
}
