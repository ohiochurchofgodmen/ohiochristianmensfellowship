module.exports = {
  siteMetadata: {
    title: "Ohio Christian Men's Fellowship",
    description: "An event in which Christian men gather in fellowship with one another to learn about Christ and His love for us. Register today to attend this event.",
    keywords: "jesus christ, christian mingle, ministry, church of christ, christ fellowship, fellowship church, bibleman, who is jesus christ, jesus is lord, spiritual retreats, fellowship one, christ fellowship church, christian missionaries, men's ministry, ministry of reconciliation, church ministry, men's retreat, christian retreat, outreach ministry, new life fellowship church, church, bible, bible verses, god, prayer, bible verse of the day, jesus christ, preacher, baptism, faith, books of the bible, psalm, catholic, miracle, church of jesus christ, jesus christ superstar, yahweh, bible quotes, pastor, the bible, holy spirit, bible study, salvation",
    language: "en",
    web_author: "Joshua Krumm",
    robots: "index, nofollow",
    siteUrl: 'https://ohiocmf.com/',
    donations: 'https://checkout.square.site/pay/82087ebfac8848dfb2faaca91e2ec753',
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/docs/`,
      },
    },
    `gatsby-transformer-pdf`,
    'gatsby-plugin-offline',
    'gatsby-plugin-cname',
  ],
}
