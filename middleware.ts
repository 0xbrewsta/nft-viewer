import { NextResponse, NextRequest } from "next/server";
import { GRAPHQL_API_ENDPOINT, PROXY_GRAPHQL_API_ENDPOINT } from "./constants";

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

  // If API
  if(request.nextUrl.pathname === PROXY_GRAPHQL_API_ENDPOINT) {
    // Proxy to LooksRareAPI
    return NextResponse.redirect(GRAPHQL_API_ENDPOINT);
  }

  return NextResponse.next();
}