import apiClient from "@/utils/api";

export const getUserPlaylists = async (session) => {
  let response = await apiClient(session).get("me/playlists");
  return response ? response.data.items : [];
};
