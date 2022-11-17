import apiClient from "@/utils/apiClient";

export const refreshToken = async (token) => {
  const url = "https://accounts.spotify.com/api/token";

  const options = {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  };

  const body = {
    client_id: process.env.SPOTIFY_CLIENT_ID,
    client_secret: process.env.SPOTIFY_CLIENT_SECRET,
    grant_type: "refresh_token",
    refresh_token: token.refreshToken,
  };

  const { data } = await apiClient().post(url, body, options);

  return {
    ...token,
    accessToken: data.access_token,
    expiresAt: Date.now() + data.expires_in * 1000,
    refreshToken: data.refresh_token ?? token.refreshToken,
  };
};

export const getUserPlaylists = async (session) => {
  const response = await apiClient(session.accessToken).get("me/playlists");
  return response ? response.data.items : [];
};

export const getUserTopTracks = async (session, limit) => {
  const response = await apiClient(session.accessToken).get(
    `/me/top/tracks?limit=${limit}&time_range=long_term`
  );
  return response ? response.data.items : [];
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
  return response ? response.data : {};
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
