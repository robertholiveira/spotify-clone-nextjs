import ListItem from "../ListItem";

import noPicture from "public/images/no-picture-artist.jpg";

function TrackItem({ track }) {
  const albumImage = track.album.images.length
    ? track.album.images[0].url
    : noPicture.src;

  return (
    <ListItem
      image={albumImage}
      link={`dashboard/album/${track.album.id}`}
      title={track.name}
      subTitle={track.artists[0].name}
      trackToPlay={track}
    />
  );
}

export default TrackItem;
