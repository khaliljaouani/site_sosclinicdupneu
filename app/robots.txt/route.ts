// robots.txt
export function GET() {
  return new Response(`User-agent: *\nAllow: /\nSitemap: https://www.exemple-pneu.fr/sitemap.xml`, {
    headers: { "Content-Type": "text/plain" }
  });
}
