// sitemap.xml
export async function GET() {
  const urls = ["","/a-propos","/zone-intervention","/mentions-legales","/nous-contacter"]
    .map(u => `<url><loc>https://www.exemple-pneu.fr${u}</loc></url>`).join("");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { "Content-Type": "application/xml" }});
}
