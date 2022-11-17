import { ListItem } from "@/components";
import noPicture from "public/images/no-picture-artist.jpg";

function ArtistItem({ artist }) {
  const artistImage = artist.images.length
    ? artist.images[0].url
    : noPicture.src;

  return (
    <ListItem
      image={artistImage}
      circleImage={true}
      link={`/artist/${artist.id}`}
      title={artist.name}
    />
  );
}

export default ArtistItem;
