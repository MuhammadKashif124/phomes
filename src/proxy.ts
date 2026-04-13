import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const session = request.cookies.get('admin_session')
  const secret = process.env.ADMIN_SECRET

  const isAuthenticated = session && secret && session.value === secret

  if (pathname.startsWith('/admin/dashboard')) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/admin', request.url))
    }
  }

  if (pathname === '/admin' && isAuthenticated) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin', '/admin/dashboard/:path*'],
}
