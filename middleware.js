//export { default } from "next-auth/middleware";

import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware(req) {
  const expireTime = new Date(req.nextauth.token.expiresAt);
  const expiredToken = Date.now() >= expireTime;

  if (!req.nextauth.token || expiredToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
});

export const config = { matcher: ["/dashboard/:path*"] };
