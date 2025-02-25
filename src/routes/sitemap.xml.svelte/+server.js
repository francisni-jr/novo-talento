//app/sitemap.xml.svelte

const site = "https://agenciant.online"

const pages = [
  "suporte",
  "recursos",
  "recursos/guia-de-profissoes",
  "recursos/guia-de-profissoes/autoconhecimento",
  "recursos/guia-de-profissoes/areas-de-atuacao",
  "recursos/guia-de-profissoes/mercado-de-trabalho",
  ]

  
/** @type {import('./$types').RequestHandler} */
export async function GET({
    url
}) {
    const body = sitemap(pages);
    const response = new Response(body);
    response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
    response.headers.set('Content-Type', 'application/xml');
    return response;
}

const sitemap = (pages) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${site}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  ${pages.map((page) => `
  <url>
    <loc>${site}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `).join('')}
</urlset>`;