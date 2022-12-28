import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

import Search from "@/components/pages/Search";
import ContentWrapper from "@/components/organisms/ContentWrapper";

export default function SearchPage() {
  const { t } = useTranslation("search");

  return (
    <>
      <Head>
        <title>{`${t("titlePage")} | Spotify`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ContentWrapper>
        <Search />
      </ContentWrapper>
    </>
  );
}
