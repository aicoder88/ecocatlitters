/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ecocatlitters.com',
  generateRobotsTxt: false, // We already have a robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [],
  generateIndexSitemap: false,
}
