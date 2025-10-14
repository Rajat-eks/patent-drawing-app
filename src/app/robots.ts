import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/cart',
        '/auth/',
        '/thank-you-*',
        '/pay-invoice',
        '/non-disclosure-agreement',
      ],
    },
    sitemap: 'https://thepatentdrawings.com/sitemap.xml',
  }
}
