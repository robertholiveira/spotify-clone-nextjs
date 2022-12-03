import Welcome from "@/components/atoms/Welcome";
import List from "@/components/organisms/List";

function Home({ recentTracks, relatedArtists, featuredPlaylists, user }) {
  return (
    <>
      <Welcome name={user.name} />
      <List items={recentTracks} type="track" title="Tocadas recentemente" />
      <List
        items={relatedArtists.items}
        type="artist"
        title={`Porque você ouviu ${relatedArtists.name}`}
      />
      <List
        items={featuredPlaylists.playlists.items}
        type="playlist"
        title={`Em alta: ${featuredPlaylists.message}`}
      />
    </>
  );
}

export default Home;
