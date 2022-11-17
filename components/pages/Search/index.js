import { useRef, useState } from "react";
import { useSession } from "next-auth/react";

import { SearchField, TrackTable, ArtistsList } from "@/components";
import { getSearch } from "@/services/spotify";

//import styles from "./styles.module.scss";

function Search() {
  const { data: session } = useSession();
  const [artists, setArtists] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchRef = useRef();

  const searchHandler = async () => {
    setLoading(true);
    const resultSearch = await getSearch(session, 12, searchRef.current.value);

    if (resultSearch) {
      setArtists(resultSearch.artists.items);
      setTracks(resultSearch.tracks.items);
    }

    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <>
      <SearchField
        searchHandler={() => searchHandler()}
        placeholder="Pesquise por artistas ou músicas"
        ref={searchRef}
        isLoading={loading}
      />

      {!loading && (
        <>
          <ArtistsList artists={artists} title="Artistas" />
          <TrackTable tracks={tracks} title="Músicas" />
        </>
      )}
    </>
  );
}

export default Search;
