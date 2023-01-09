
<img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="Logo" width="200"/>

# Spotify Clone (NextJS)

This repository aims to create a Spotify Web Player with NextJS Framework and the Spotify Web API resources.

## Technologies used

[NextJS](https://nextjs.org/)

[ReactJS](https://reactjs.org/)

[Next Auth](https://next-auth.js.org/)

[Next Translate](https://github.com/aralroca/next-translate)

## Video Demo

https://user-images.githubusercontent.com/31046982/211395635-034716e6-5ec7-45da-9ce0-216738ebd347.mp4


## Environment variables

To run this project locally you'll need to add the following environment variables in your .env file:

`SPOTIFY_CLIENT_ID` (The Spotify Client ID of your APP on Spotify, avaliable on the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/))

`SPOTIFY_CLIENT_SECRET` ( The Spotify Client Secret of your APP on Spotify, also avaliable on the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/) )

`NEXTAUTH_SECRET` (A random secret string to represents the Next Auth Secret)

`NEXT_PUBLIC_SPOTIFY_API_BASE_URL` (The Spotify base api URL: https://api.spotify.com/v1)

## Running the project

Add the environment variables.

Install the npm dependencies:

```bash
  npm i
```

Run the project locally:

```bash
  npm run dev
```
