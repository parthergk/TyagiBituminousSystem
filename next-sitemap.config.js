/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.tyagibituminoussystem.in",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "monthly",
  priority: 0.7,
  exclude: ["/admin"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
