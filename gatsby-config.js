const themeOptions = require('./theme-options');

const pathPrefix = "/";

const getSidebarConfig = () => {
  const sidebarContent = require('./content/structure.js');
  const sidebarDefaults = {
    null: [
      'index',
    ]
  };

  return sidebarCategories = {...sidebarDefaults, ...sidebarContent};
}

const apolloDocsOptions = {
  ...themeOptions,
  root: __dirname,
  contentDir: './content/',
  description: 'Tezos Developer Portal Preview',
  siteName: 'Tezos Developer Portal Preview',
  sidebarCategories: getSidebarConfig(),
}

module.exports = {
  pathPrefix: pathPrefix,
  siteMetadata: {
    siteUrl: themeOptions.siteUrl,
  },
  plugins: [
  	{
      resolve: 'gatsby-theme-apollo-docs',
      options: apolloDocsOptions
    },
    {
      resolve: 'gatsby-transformer-remark',
    }
  ]
};
