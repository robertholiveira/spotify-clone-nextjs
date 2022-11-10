//export { default } from "next-auth/middleware";

import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    if (!req.nextauth.token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        Date.now() <= token.expiresAt;
      },
    },
  }
);

export const config = { matcher: ["/dashboard/:path*"] };
