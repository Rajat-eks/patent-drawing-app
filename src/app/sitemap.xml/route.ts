import { NextResponse } from 'next/server';

const baseUrl = 'https://thepatentdrawings.com';

// Static routes with their priorities and change frequencies
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/contact-us', priority: '0.8', changefreq: 'monthly' },
  { path: '/our-company', priority: '0.7', changefreq: 'monthly' },
  { path: '/our-mission', priority: '0.7', changefreq: 'monthly' },
  { path: '/our-engagement-model', priority: '0.7', changefreq: 'monthly' },
  { path: '/leadership-team', priority: '0.6', changefreq: 'monthly' },
  { path: '/business-model', priority: '0.6', changefreq: 'monthly' },
  { path: '/work-process', priority: '0.6', changefreq: 'monthly' },
  { path: '/awards-recoginitions', priority: '0.5', changefreq: 'monthly' },
  { path: '/faq', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/patent-drawing-knowledge-hub', priority: '0.8', changefreq: 'weekly' },
  { path: '/patent-drawing-samples', priority: '0.7', changefreq: 'weekly' },
  { path: '/complex-patent-drawing-samples', priority: '0.7', changefreq: 'weekly' },
  { path: '/comprehensive-guide-sheet-sizes-secifically-patent-drawings', priority: '0.6', changefreq: 'monthly' },
  { path: '/mastering-line-quality-patent-drawings-comprehensive-guide', priority: '0.6', changefreq: 'monthly' },
  { path: '/patent-drawings-checklist-step-by-step-complete-guide', priority: '0.6', changefreq: 'monthly' },
  { path: '/ultimate-guide-patent-drawing-excellence', priority: '0.6', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms-condition', priority: '0.3', changefreq: 'yearly' },
  { path: '/refund-policy', priority: '0.3', changefreq: 'yearly' },
];

// Service routes
const serviceRoutes = [
  { path: '/services/utility-patent-drawings', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/design-patent-drawings', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/chemical-structure-drawings', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/3d-modeling-drawings', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/trademark-drawings', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/objected-patent-drawings', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/trial-graphic-services', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/patent_drawing', priority: '0.8', changefreq: 'weekly' },
];

export async function GET() {
  const lastmod = new Date().toISOString();
  
  const allRoutes = [...staticRoutes, ...serviceRoutes];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}
