export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://cube-crafter-site.vercel.app/sitemap.xml',
  }
}
