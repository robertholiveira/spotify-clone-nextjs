import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const scope =
  "user-read-email user-read-private playlist-read-private playlist-read-collaborative user-top-read user-read-recently-played";

export const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      authorization: {
        params: { scope },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.id = account.id;
        token.accessToken = account.access_token;
        token.expiresAt = account.expires_at * 1000;
      }
      return token;
    },
    async session({ session, token }) {
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
