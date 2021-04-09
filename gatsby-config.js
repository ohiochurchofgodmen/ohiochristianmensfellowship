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
    testimonials: [
      {
        quote: "Ohio men of God reaching within each other and beyond to others! Reaching out sharing the Gospel. What Go has done is doing and will do! No words can really express",
        author: "Jim Gilley"
      },
      {
        quote: "The Ohio Church of God Men’s event has been a blessing to me and my congregation. Men have been challenged and encouraged there the many years. Coming to Christ having their lives changed forever, has always been the final goal. You’ll feel the power and love of",
        author: "Rev. Woodrow Wilson"
      },
      {
        quote: "This men's retreat has been life-changing to my spiritual life. It is always a well-needed refreshing weekend getaway to fellowship with a group of guys who can encourage and lift you up.",
        author: "Joe"
      },
      {
        quote: "A friend went with me to the men’s retreat. During the retreat, he recommitted his life to Christ. Shortly after he was diagnosed with pancreatic cancer. His renewed faith gave him the strength to face the suffering with amazing grace.",
        author: "Les Bowers"
      },
      {
        quote: "My name is Jerry Poland have been associated with the Ohio Men’s Retreat since its inception in 1976. I am “sold out” to the men of Ohio and for what it has done and changed for so many men in Ohio and other states. God has blessed this organization beyond what we thought it would do. We have been blessed with top-notch speakers, music, and Christian programs. I would challenge any man or boy to come and experience what God can do for you.",
        author: "Jerry S. Pol"
      },
      {
        quote: "I am part of 3 generations attending the Ox Roast event. I and my family has grown in the Lord and have learned to have a better relationship with Jesus",
        author: "Bobby Rose"
      },
      {
        quote: "This event is an amazing time for fun and fellowship with men who truly have a love for God. I have been attending this fellowship for the last 8 years. The positive support and uplifting atmosphere is something that cannot be described without actually being there. It’s a blessing above and beyond anything imaginable.",
        author: "Chad Knight"
      }
    ],
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
  ]
}
