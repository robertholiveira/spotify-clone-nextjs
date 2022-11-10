import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { refreshToken } from "@/services/spotify";

export const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      authorization:
        "https://accounts.spotify.com/authorize?scope=user-read-email&scope=user-read-email%20user-read-private%20playlist-read-private%20playlist-read-collaborative%20user-top-read",
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.id = account.id;
        token.expiresAt = Date.now() + account.expires_in * 1000;
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }
      if (Date.now() < token.expiresAt) {
        return token;
      }

      // Access token has expired, try to update it
      return await refreshToken(token);
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken;

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions);
