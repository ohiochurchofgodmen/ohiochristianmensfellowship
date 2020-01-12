module.exports = {
  siteMetadata: {
    title: "Ohio Christian Men's Fellowship",
    description: "An event in which Christian men gather in fellowship with one another to learn about Christ and His love for us. Register today to attend this event.",
    keywords: "christ, christian, fellowship, spiritual, jesus, god, gather, love, event, powerful, fun, uplifting, men",
    language: "en",
    web_author: "Joshua Krumm",
    robots: "index, nofollow",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
  pathPrefix: "/ohiochristianmensfellowship",
}
