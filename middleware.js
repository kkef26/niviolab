export const config = {
  matcher: ['/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)'],
};

export default function middleware(request) {
  const url = new URL(request.url);
  const hostname = request.headers.get('host') || '';

  const subdomainMap = {
    'dispatch.niviolab.com': '/app/dispatch',
    'marketer.niviolab.com': '/app/marketer',
    'bind.niviolab.com': '/app/bind',
    'shield.niviolab.com': '/app/shield',
    'vet.niviolab.com': '/app/vet',
    'board.niviolab.com': '/app/board',
  };

  const prefix = subdomainMap[hostname];
  if (prefix && !url.pathname.startsWith('/app/')) {
    const newUrl = new URL(url);
    newUrl.pathname = prefix + (url.pathname === '/' ? '' : url.pathname);
    return new Response(null, {
      status: 200,
      headers: {
        'x-middleware-rewrite': newUrl.toString(),
      },
    });
  }
}
