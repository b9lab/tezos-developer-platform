const themeOptions = require('./theme-options');
const remarkTypescript = require('remark-typescript');

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

const sidebarConfig = getSidebarConfig();

const apolloDocsOptions = {
  ...themeOptions,
  root: __dirname,
  contentDir: './content/',
  description: 'Tezos Developer Portal Preview',
  siteName: 'Tezos Developer Portal Preview',
  sidebarCategories: getSidebarConfig(),
}

const apolloRemarkPluginConfig = require("gatsby-theme-apollo-docs/gatsby-config.js")({
  ...apolloDocsOptions,
  sidebarCategories: sidebarConfig
});

const apolloGatsbyRemarkPlugins = apolloRemarkPluginConfig.plugins.find(i => i.resolve == "gatsby-transformer-remark").options.plugins;

let remarkPluginConfig = [
  {
    resolve: "gatsby-remark-embed-video",
    options: {
      width: "100%",
      height: 400,
      related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
      noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
    }
  },
  {
    resolve: `gatsby-remark-katex`,
    options: {
      // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
      strict: `ignore`
    }
  }
]

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
      options: {
        plugins: remarkPluginConfig.concat(apolloGatsbyRemarkPlugins, ['gatsby-remark-autolink-headers', 'gatsby-remark-check-links'])
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: remarkPluginConfig.concat(apolloGatsbyRemarkPlugins),
        remarkPlugins: [
          [remarkTypescript, {wrapperComponent: 'MultiCodeBlock'}]
        ]
      }
    },
  ]
};
