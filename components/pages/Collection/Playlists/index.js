import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import useTranslation from "next-translate/useTranslation";
import { Container, Row, Col } from "react-grid-system";

import { getUserPlaylists } from "@/services/spotify";

import Title from "@/components/atoms/Title";
import ContentWrapper from "@/components/organisms/ContentWrapper";
import PlaylistItem from "@/components/molecules/PlaylistItem";
import SavedTracksCard from "@/components/molecules/SavedTracksCard";
import CollectionMenu from "@/components/molecules/CollectionMenu";
import ButtonLoader from "@/components/atoms/ButtonLoader";

function Playlists({ playlists: userPlaylists, tracks }) {
  const { t } = useTranslation("collection.playlists");

  const { data: session } = useSession();

  const [isLoading, setIsLoading] = useState(false);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    setPlaylists(userPlaylists.items);
  }, [setPlaylists, userPlaylists]);

  const loadMoreHandler = async () => {
    setIsLoading(true);
    let morePlaylists = await getUserPlaylists(
      session,
      userPlaylists.limit,
      playlists.length
    );
    setPlaylists((prevPlaylists) => {
      return prevPlaylists.concat(morePlaylists.items);
    });

    setIsLoading(false);
  };

  const renderPlaylistsItems = () => {
    return playlists.map((playlist) => {
      return (
        <Col style={{ marginBottom: 20 }} lg={2} key={playlist.id}>
          <PlaylistItem playlist={playlist} />
        </Col>
      );
    });
  };

  const hasTotalPlaylists = () => {
    return userPlaylists.total === playlists.length;
  };

  return (
    <ContentWrapper>
      <Container>
        <CollectionMenu />
        <Title>{t("title")}</Title>
        <Row gutterWidth={20}>
          <Col lg={4} style={{ marginBottom: 20 }}>
            <SavedTracksCard tracks={tracks} />
          </Col>
          {renderPlaylistsItems()}
        </Row>
        {!hasTotalPlaylists() && (
          <ButtonLoader isLoading={isLoading} onClick={loadMoreHandler} />
        )}
      </Container>
    </ContentWrapper>
  );
}

export default Playlists;
