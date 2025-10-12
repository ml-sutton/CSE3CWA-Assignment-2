import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import CorsHeaders from "@/consts/corsHeaders";

export function middleware(request: NextRequest) {
  if (request.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 204,
      headers: CorsHeaders,
    });
  }

  const response = NextResponse.next();
  Object.entries(CorsHeaders).forEach(([key, value]) => {
    response.headers.set(key, value as string);
  });

  return response;
}
export const config = {
  matcher: ['/', '/api/:path*'],
};
