const themeOptions = require('./theme-options');
const remarkTypescript = require('remark-typescript');
const unwrapImages = require('remark-unwrap-images');

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

const subSites = [
  {
    id: "tezos-docs",
    sidebarCategories: sidebarConfig
  }
]

const apolloDocsOptions = {
  ...themeOptions,
  root: __dirname,
  contentDir: './content/',
  description: 'Tezos Developer Portal',
  siteName: 'Tezos Developer Portal',
  sidebarCategories: getSidebarConfig(),
  subSites: subSites
}

const apolloRemarkPluginConfig = require("gatsby-theme-apollo-docs/gatsby-config.js")({
  ...apolloDocsOptions,
  sidebarCategories: sidebarConfig
});

const apolloGatsbyRemarkPlugins = apolloRemarkPluginConfig.plugins.find(i => i.resolve == "gatsby-transformer-remark").options.plugins;

let remarkPluginConfig = [
  {
    resolve: `gatsby-remark-katex`,
    options: {
      // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
      strict: `ignore`
    }
  },
  {
    resolve: "gatsby-remark-images",
    options: {
      maxWidth: 736, // page max container width
      linkImagesToOriginal: false,
      showCaptions: true,
      quality: 75
    }
  },
  {
    resolve: "gatsby-remark-images-medium-zoom",
    options: {
      excludedSelector: "no-zoom"
    }
  }
]

module.exports = {
  pathPrefix: pathPrefix,
  siteMetadata: {
    siteUrl: themeOptions.siteUrl,
    slackUrl: themeOptions.slackUrl,
    topMenu: [
      {
        category: null,
        name: "Developer Portal",
        link: "/",
        external: false
      },
      {
        category: "tezos-portal",
        name: "Developer Portal",
        link: "/tezos",
        external: false
      }
    ]
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
          unwrapImages,
          [remarkTypescript, {wrapperComponent: 'MultiCodeBlock'}]
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true
        /*srcSetBreakpoints: [ 200, 340, 520, 736, 1024, 1280 ]*/
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-M3M2BPH",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "devportal" },
        // Specify optional GTM environment details.
        //gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        //gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        //dataLayerName: "YOUR_DATA_LAYER_NAME",
        routeChangeEventName: "devportal-navigate",
      },
    },
    {
      resolve: "gatsby-advanced-readingtime",
      options: {
        imageTime: 1,
        codeTimePerLine: 0.2,
        customComponents: [
          {
            name: 'ActionCard',
            time: 1
          }
        ]
      }
    }
  ]
};