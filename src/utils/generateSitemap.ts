import { writeFileSync } from 'fs';
import { client } from '../lib/apollo-client';
import { GET_PAGES } from '../lib/queries';

export async function generateSitemap() {
  try {
    const { data } = await client.query({ query: GET_PAGES });
    const pages = data.pages.nodes;

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page: any) => {
      return `
    <url>
      <loc>https://kabura.nl${page.uri}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`;
    })
    .join('')}
</urlset>`;

    writeFileSync('public/sitemap.xml', sitemap);
    console.log('Sitemap generated successfully');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}