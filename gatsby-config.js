module.exports = {
  siteMetadata: {
    title: `Atlas`,
    description: `Earn rewards on rent`,
    image: `./src/svg/iconmark.png`,
    siteUrl: `https://www.useatlas.co`,
  },
  pathPrefix: "/landingpage",
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    }
  ]
};
