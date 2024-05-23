import { NextResponse } from 'next/server'
import Create from './component/auth/identifier'

export const config = {
    matcher: ['/app/dashboard/:path*'],
}

export function middleware(request) {
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        if (!request.cookies.has('personal_identifier')) {
            return NextResponse.rewrite(new URL('/', request.url))
        }
    }
}