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
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: "gatsby-plugin-prettier-eslint",
      options: {
        cwd: process.cwd(), // path to a directory that should be considered as the current working directory
        watch: true, // format/lint on save
        initialScan: true, // if true, will format/lint the whole project on Gatsby startup
        onChangeFullScanLint: false, // if true, on file save always perform full scan lint
        onChangeFullScanFormat: false, // if true, on file save always perform full scan format
        prettierLast: false, // if true, will run Prettier after ESLint
        ignorePatterns: [
          "**/node_modules/**/*",
          "**/.git/**/*",
          "**/dist/**/*",
          ".cache/**/*",
          "public/**/*",
          "gatsby-browser.js",
          "gatsby-config.js",
          "gatsby-node.js",
          "gatsby-ssr.js",
        ], // string or array of paths/files/globs to ignore
        prettier: {
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            "**/*.{css,scss,less}",
            "**/*.{json,json5}",
            "**/*.{graphql}",
            "**/*.{md,mdx}",
            "**/*.{html}",
            "**/*.{yaml,yml}",
          ],
          ignorePatterns: [], // string or array of paths/files/globs to exclude related only to Prettier
          customOptions: {}, // see: https://prettier.io/docs/en/options.html
        },
        eslint: {
          patterns: "**/*.{js,jsx,ts,tsx}",
          ignorePatterns: [], // string or array of paths/files/globs to exclude related only to ESLint
          formatter: "stylish", // set custom or third party formatter
          maxWarnings: undefined, // number of max warnings allowed, when exceed it will fail Gatsby build
          emitWarning: true, // if true, will emit lint warnings
          failOnError: false, // if true, any lint error will fail the build, you may set true only in your prod config
          failOnWarning: false, // same as failOnError but for warnings
          plugins: [], // an array of plugins to load for ESLint
          customOptions: {
            fix: true,
            cache: true,
            rules: {
              "react/prop-types": 0
            }
          },  // see: https://eslint.org/docs/developer-guide/nodejs-api#cliengine
        },
      },
    },
  ]
}
