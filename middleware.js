import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";
export async function middleware(req) {
  if (req.nextUrl.pathname === "/") {
    const session = await getSession({ req });
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    if (!session) return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}
