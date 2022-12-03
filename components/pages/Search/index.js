import { useRef, useState } from "react";
import { useSession } from "next-auth/react";

import { getSearch } from "@/services/spotify";

import SearchField from "@/components/atoms/SearchField";
import TrackTable from "@/components/organisms/TrackTable";
import List from "@/components/organisms/List";

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
      setArtists(resultSearch.artists);
      setTracks(resultSearch.tracks);
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
          <List type="artist" items={artists} title="Artistas" />
          <TrackTable tracks={tracks} title="Músicas" />
        </>
      )}
    </>
  );
}

export default Search;
