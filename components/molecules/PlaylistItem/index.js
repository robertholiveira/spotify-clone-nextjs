import ListItem from "../ListItem";
import noPicture from "public/images/no-picture-artist.jpg";

function PlaylistItem({ playlist }) {
  const playlistImage = playlist.images.length
    ? playlist.images[0].url
    : noPicture.src;

  return (
    <ListItem
      image={playlistImage}
      link={`/playlist/${playlist.id}`}
      title={playlist.name}
      subTitle={playlist.description}
    />
  );
}

export default PlaylistItem;
