import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  // Clone the request url
  const url = req.nextUrl.clone();

  // Get pathname of request (e.g. /blog-slug)
  const { pathname } = req.nextUrl;

  if (pathname.startsWith(`/_sites`))
    return new Response(null, {
      status: 404,
    });

  if (!pathname.includes(".") && !pathname.startsWith("/api")) {
    if (
      pathname === "/login" &&
      (req.cookies["next-auth.session-token"] ||
        req.cookies["__Secure-next-auth.session-token"])
    ) {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }
}
