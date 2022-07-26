import { NextResponse, NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
    const { pathname } = request.nextUrl;
    const homeRegEx = /^\/$/;

    // If home page
  if (homeRegEx.test(pathname)) {
    // Redirect to /collections
    const collectionsUrl = request.nextUrl.clone();
    collectionsUrl.pathname = "/collections";

    return NextResponse.redirect(collectionsUrl);
  }

  return NextResponse.next();
}