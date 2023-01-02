import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    const { headers, cookies, nextUrl, nextauth } = req;

    const browserLanguage =
      headers
        .get("accept-language")
        ?.split(",")?.[0]
        .split("-")?.[0]
        .toLowerCase() || "en";

    const cookieLocale = cookies.get("NEXT_LOCALE")?.value;

    const redirectLocale = cookieLocale
      ? cookieLocale
      : browserLanguage === "en"
      ? "en"
      : "pt-BR";

    const expireTime = new Date(nextauth.token.expiresAt);
    const expiredToken = new Date() >= expireTime;

    const isAuthenticated = nextauth.token && !expiredToken;

    if (isAuthenticated && nextUrl.pathname == "/") {
      return NextResponse.redirect(
        new URL(`/${redirectLocale}/dashboard`, req.url)
      );
    }

    if (!isAuthenticated && !nextUrl.pathname.includes("login")) {
      return NextResponse.redirect(
        new URL(`/${redirectLocale}/auth/login`, req.url)
      );
    }
  },
  {
    pages: {
      signIn: "/auth/login",
    },
  }
);
