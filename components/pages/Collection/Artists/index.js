import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import useTranslation from "next-translate/useTranslation";
import { Container, Row, Col } from "react-grid-system";

import { getUserArtists } from "@/services/spotify";

import Title from "@/components/atoms/Title";
import ContentWrapper from "@/components/organisms/ContentWrapper";
import CollectionMenu from "@/components/molecules/CollectionMenu";
import ArtistItem from "@/components/molecules/ArtistItem";
import ButtonLoader from "@/components/atoms/ButtonLoader";

function Artists({ artists: userArtists }) {
  const { t } = useTranslation("collection.artists");
  const { data: session } = useSession();

  const [isLoading, setIsLoading] = useState(false);
  const [artists, setArtists] = useState([]);
  const [after, setAfter] = useState(null);

  useEffect(() => {
    setArtists(userArtists.items);
    setAfter(userArtists.cursors.after);
  }, []);

  const loadMoreHandler = async () => {
    setIsLoading(true);
    console.log("after", after);
    let moreArtists = await getUserArtists(session, userArtists.limit, after);
    setAfter(moreArtists.cursors.after);
    setArtists((prevArtists) => {
      return prevArtists.concat(moreArtists.items);
    });

    setIsLoading(false);
  };

  const renderArtistsItems = () => {
    return artists.map((artist) => {
      return (
        <Col style={{ marginBottom: 20 }} lg={2} key={artist.id}>
          <ArtistItem artist={artist} />
        </Col>
      );
    });
  };

  const hasTotalArtists = () => {
    return userArtists.total === artists.length || after === null;
  };

  return (
    <ContentWrapper>
      <Container>
        <CollectionMenu />
        <Title>{t("title")}</Title>
        <Row gutterWidth={20}>{renderArtistsItems()}</Row>
        {!hasTotalArtists() && (
          <ButtonLoader isLoading={isLoading} onClick={loadMoreHandler} />
        )}
      </Container>
    </ContentWrapper>
  );
}

export default Artists;
