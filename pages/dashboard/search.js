import Head from "next/head";

import Search from "@/components/pages/Search";
import ContentWrapper from "@/components/organisms/ContentWrapper";

export default function SearchPage() {
  return (
    <>
      <Head>
        <title>Pesquisar | Spotify </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ContentWrapper>
        <Search />
      </ContentWrapper>
    </>
  );
}
