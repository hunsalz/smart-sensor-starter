// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Sensor Dashboard",
  siteDescription: "Sensor Dashboard",
  siteUrl: process.env.SITE_URL,
  pathPrefix: process.env.PATH_PREFIX,
  templates: {
    Record: "/:title"
  },

  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Record",
        baseDir: "./content",
        path: "*.md"
      }
    }
    /*     {
      use: "gridsome-plugin-pwa",
      options: {
        title: "Sensor Dashboard",
        startUrl: "/",
        display: "standalone",
        statusBarStyle: "default",
        manifestPath: "/manifest.json", // see https://github.com/rishabh3112/gridsome-plugin-pwa/pull/18
        serviceWorkerPath: "/service-worker.js", // see https://github.com/rishabh3112/gridsome-plugin-pwa/pull/18
        cachedFileTypes: "js,json,css,html,png,jpg,jpeg,svg",
        shortName: "Dashboard",
        themeColor: "#666600",
        backgroundColor: "#ffffff",
        icon: "src/assets/images/website-icon.png",
        msTileImage: "",
        msTileColor: "#666600"
      }
    } */
  ],

  transformers: {
    // add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link"
    }
  }
};
