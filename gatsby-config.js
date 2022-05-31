module.exports = {
  siteMetadata: {
    title: `X-Toonz`,
    description: `Insert description`,
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
  ]
};