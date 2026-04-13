import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// NOTE: No secret values here — edge functions bundle env vars into static output
// which triggers Netlify's secrets scanner. The actual secret comparison is done
// in the dashboard server component (Node.js runtime, never bundled).
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const session = request.cookies.get('admin_session')
  const hasSession = !!(session?.value)

  if (pathname.startsWith('/admin/dashboard') && !hasSession) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  if (pathname === '/admin' && hasSession) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin', '/admin/dashboard/:path*'],
}
