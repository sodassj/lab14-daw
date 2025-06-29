export default function handler(req, res) {
  const baseUrl = 'https://tusitio.vercel.app'; // O usa localhost para pruebas locales

  // Simulamos una base de datos
  const pages = [
    { path: '/', updatedAt: '2024-06-01' },
    { path: '/blog', updatedAt: '2024-06-10' },
    { path: '/contacto', updatedAt: '2024-06-05' },
    { path: '/producto/1', updatedAt: '2024-06-15' },
    { path: '/producto/2', updatedAt: '2024-06-18' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (page) => `
      <url>
        <loc>${baseUrl}${page.path}</loc>
        <lastmod>${page.updatedAt}</lastmod>
      </url>`
      )
      .join('')}
  </urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(sitemap);
}
