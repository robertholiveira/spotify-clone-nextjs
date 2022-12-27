import apiClient from "@/utils/apiClient";
import addIndexToTracks from "@/utils/addIndexToTracks";
import sortAlbumsByReleaseDate from "@/utils/sortAlbumsByReleaseDate";
import changeItemsArrayToTracks from "@/utils/changeItemsArrayToTracks";

export const getUserProfile = async (session, id) => {
  const response = await apiClient(session.accessToken).get(`users/${id}`);
  return response ? response.data : {};
};

export const getUserPlaylists = async (session) => {
  const response = await apiClient(session.accessToken).get("me/playlists");
  return response ? response.data.items : [];
};

export const getUserTopTracks = async (session, limit) => {
  const response = await apiClient(session.accessToken).get(
    `/me/top/tracks?limit=${limit}&time_range=long_term`
  );
  return response ? addIndexToTracks(response.data.items) : [];
};

export const getUserTopArtists = async (session, limit) => {
  const response = await apiClient(session.accessToken).get(
    `/me/top/artists?limit=${limit}&time_range=long_term`
  );
  return response ? response.data.items : [];
};

export const getSearch = async (session, limit, search) => {
  const response = await apiClient(session.accessToken).get(
    `/search?q=${search}&limit=${limit}&type=artist,track`
  );

  if (response) {
    const result = {
      artists: response.data.artists.items,
      tracks: addIndexToTracks(response.data.tracks.items),
    };
    return result;
  }
  return {};
};

export const getRecentlyPlayed = async (session, limit) => {
  const response = await apiClient(session.accessToken).get(
    `/me/player/recently-played?limit=${limit}`
  );

  return response ? response.data.items : [];
};

export const getRelatedArtists = async (session, artistId, limit) => {
  const response = await apiClient(session.accessToken).get(
    `/artists/${artistId}/related-artists`
  );
  return response ? response.data.artists.slice(0, limit) : [];
};

export const getFeaturedPlaylists = async (session, country, limit) => {
  const response = await apiClient(session.accessToken).get(
    `/browse/featured-playlists?limit=${limit}&country=${country}`
  );
  return response ? response.data : {};
};

export const getArtist = async (session, id) => {
  const response = await apiClient(session.accessToken).get(`/artists/${id}`);
  return response ? response.data : {};
};

export const getArtistTopTracks = async (session, country, id, limit) => {
  const response = await apiClient(session.accessToken).get(
    `/artists/${id}/top-tracks?country=${country}`
  );
  return response ? addIndexToTracks(response.data.tracks).slice(0, limit) : [];
};

export const getArtistAlbums = async (session, id, limit) => {
  const response = await apiClient(session.accessToken).get(
    `/artists/${id}/albums?limit=${limit}&include_groups=album,single`
  );

  return response ? sortAlbumsByReleaseDate(response.data.items) : [];
};

export const getAlbum = async (session, id) => {
  const response = await apiClient(session.accessToken).get(`/albums/${id}`);

  if (response) {
    let album = {
      ...response.data,
      tracks: addIndexToTracks(response.data.tracks.items),
    };

    album.tracks = album.tracks.map((track) => {
      return {
        ...track,
        album: {
          name: album.name,
          images: album.images,
          id: album.id,
        },
      };
    });

    return album;
  }
  return {};
};

export const getPlaylist = async (session, id) => {
  const response = await apiClient(session.accessToken).get(`/playlists/${id}`);

  if (response) {
    let playlist = {
      ...response.data,
      tracks: {
        ...response.data.tracks,
        items: addIndexToTracks(
          changeItemsArrayToTracks(response.data.tracks.items)
        ),
      },
    };
    return playlist;
  }
  return {};
};

export const getPlaylistTracks = async (session, id, limit, offset) => {
  const response = await apiClient(session.accessToken).get(
    `/playlists/${id}/tracks?limit=${limit}&offset=${offset}`
  );
  return response
    ? addIndexToTracks(changeItemsArrayToTracks(response.data.items), offset)
    : [];
};
