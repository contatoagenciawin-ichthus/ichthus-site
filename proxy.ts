import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  const pathname = request.nextUrl.pathname

  const isEnglish =
    pathname === "/en" ||
    pathname.startsWith("/en/") ||
    pathname.startsWith("/work/")

  requestHeaders.set("x-ichthus-locale", isEnglish ? "en" : "pt-BR")

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
