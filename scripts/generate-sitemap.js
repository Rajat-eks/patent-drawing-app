// scripts/generate-sitemap.js
import * as fs from "node:fs";
import { globby } from "globby";

(async () => {
  // Get all page files from the app directory
  const pages = await globby([
    "src/app/**/page.tsx",
    "!src/app/**/layout.tsx",
    "!src/app/**/loading.tsx",
    "!src/app/**/error.tsx",
    "!src/app/**/not-found.tsx",
    "!src/app/404/**",
  ]);

  const baseUrl = "https://thepatentdrawings.com";

  // Static routes that should be included in sitemap
  const staticRoutes = [
    "/",
    "/about",
    "/services",
    "/contact",
    "/blog",
    "/faq",
    "/privacy-policy",
    "/terms-condition",
    "/refund-policy",
  ];

  // Use a Set to avoid duplicate URLs
  const uniqueUrls = new Set();

  // Add static routes
  staticRoutes.forEach((route) => {
    uniqueUrls.add(`${baseUrl}${route}`);
  });

  // Process page files
  pages.forEach((page) => {
    let path = page
      .replace("src/app", "")
      .replace("/page.tsx", "")
      .replace("/index", "");

    // Handle dynamic routes
    if (path.includes("[slug]")) {
      // For blog posts, you might want to add specific blog post URLs
      // For now, we'll skip dynamic routes or you can add specific ones
      return;
    }

    if (path.includes("[serviceId]")) {
      // For product pages, you might want to add specific service URLs
      // For now, we'll skip dynamic routes or you can add specific ones
      return;
    }

    const route = path === "" ? "/" : path;
    uniqueUrls.add(`${baseUrl}${route}`);
  });

  // Add specific service routes
  const serviceRoutes = [
    "/services/utility-patent-drawings",
    "/services/design-patent-drawings",
    "/services/chemical-structure-drawings",
    "/services/3d-modeling-drawings",
    "/services/trademark-drawings",
    "/services/objected-patent-drawings",
    "/services/trial-graphic-services",
    "/services/patent_drawing",
  ];

  serviceRoutes.forEach((route) => {
    uniqueUrls.add(`${baseUrl}${route}`);
  });

  // Add other specific routes
  const otherRoutes = [
    "/our-company",
    "/our-mission",
    "/our-engagement-model",
    "/leadership-team",
    "/business-model",
    "/work-process",
    "/awards-recoginitions",
    "/patent-drawing-samples",
    "/complex-patent-drawing-samples",
    "/patent-drawing-knowledge-hub",
    "/comprehensive-guide-sheet-sizes-secifically-patent-drawings",
    "/mastering-line-quality-patent-drawings-comprehensive-guide",
    "/patent-drawings-checklist-step-by-step-complete-guide",
    "/ultimate-guide-patent-drawing-excellence",
    "/cart",
    "/pay-invoice",
    "/thank-you-contact",
    "/thank-you-invoice",
    "/non-disclosure-agreement",
  ];

  otherRoutes.forEach((route) => {
    uniqueUrls.add(`${baseUrl}${route}`);
  });

  // Convert Set to array and create sitemap entries with SEO attributes
  const sitemapEntries = Array.from(uniqueUrls).map((url) => {
    const path = url.replace(baseUrl, "");
    
    // Determine priority and changefreq based on page type
    let priority = "0.5";
    let changefreq = "monthly";
    
    if (path === "/" || path === "") {
      priority = "1.0";
      changefreq = "daily";
    } else if (path.startsWith("/services/")) {
      priority = "0.8";
      changefreq = "weekly";
    } else if (path.includes("blog") || path.includes("knowledge-hub")) {
      priority = "0.7";
      changefreq = "weekly";
    } else if (path.includes("contact") || path.includes("about")) {
      priority = "0.6";
      changefreq = "monthly";
    } else if (path.includes("cart") || path.includes("auth") || path.includes("thank-you")) {
      // Skip non-crawlable pages
      return null;
    }
    
    const lastmod = new Date().toISOString();
    
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).filter(entry => entry !== null);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.join("\n")}
</urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);

  console.log("✅ Sitemap generated at public/sitemap.xml");
  console.log(`📊 Generated ${sitemapEntries.length} URLs`);
})();
