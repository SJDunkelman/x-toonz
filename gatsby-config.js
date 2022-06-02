module.exports = {
  siteMetadata: {
    title: `X-Toonz`,
    description: `Decentralised together. X-Toonz is a collection of 8,888 NFTs bringing Web3 IRL.`,
    author: `Simon Dunkelman`,
    siteUrl: `https://www.xtoonz.io`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-anchor-links",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/favicon.png"
      },
    },
  ]
};