import { NextRequest, NextResponse } from "next/server"

export function middleware(request) {
    console.log("middleware")
    const authToken = request.cookies.get("authToken")?.value
    const loggedInUserNotAccessPaths =
        request.nextUrl.pathname == "login" ||
        request.nextUrl.pathname == "signup"
    if (loggedInUserNotAccessPaths) {
        if (authToken) {
            return NextResponse.redirect(new URL("/profile/user", request.url))
        }
    } else {
        // if (!authToken) {
        return NextResponse.redirect(new URL("/login", request.url))
        // }
    }
}

export const config = {
    matcher: ["/", "/login", "/signup", "/api/:path*"]
}