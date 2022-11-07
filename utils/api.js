import axios from "@/node_modules/axios/index";

const apiClient = (session) => {
  const defaultOptions = {
    baseURL: process.env.NEXT_PUBLIC_SPOTIFY_API_BASE_URL,
  };

  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use((request) => {
    if (session) {
      request.headers.Authorization = `Bearer ${session.accessToken}`;
    }
    return request;
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(`error`, error);
    }
  );

  return instance;
};

export default apiClient;
