import { NextResponse } from 'next/server'
import * as identifier from './component/auth/identifier'

export async function middleware(request) {
    if (request.cookies.has('personal_identifier')) {

        const pid = await identifier.Get(request.cookies.get('personal_identifier').value)
        if (pid.is_watchlist == false) {
            return null;
        }
        console.log(pid);
    }

    return NextResponse.rewrite(new URL('/', request.url))
}

export const config = {
    matcher: ['/dashboard/:path*'],
}
