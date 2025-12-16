export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://cubecrafter.azurewebsites.net/sitemap.xml',
  }
}
