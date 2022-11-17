import { Row } from "react-simple-flex-grid";

import { ArtistItem, TrackItem, PlaylistItem, Title } from "@/components";

function List({ items, title, type }) {
  const hasItems = items && items.length > 0;

  const renderItem = (item, i) => {
    if (type === "artist") return <ArtistItem artist={item} key={i} />;
    if (type === "track") return <TrackItem track={item} key={i} />;
    if (type === "playlist") return <PlaylistItem playlist={item} key={i} />;
  };

  return (
    hasItems && (
      <>
        <Title>{title}</Title>
        <Row gutter={40}>
          {items.map((item, index) => renderItem(item, index))}
        </Row>
      </>
    )
  );
}

export default List;
