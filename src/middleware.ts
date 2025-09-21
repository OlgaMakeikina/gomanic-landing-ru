import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const validSubdomains = ['nastya6716', 'anastasia-ulianova'];

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const subdomain = hostname.split('.')[0];
  
  if (subdomain && subdomain !== 'www' && subdomain !== hostname) {
    if (validSubdomains.includes(subdomain)) {
      const response = NextResponse.next();
      response.headers.set('x-master-subdomain', subdomain);
      return response;
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
