// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Smart Sensor",
  siteDescription: "Show smart sensor data",
  siteUrl: "https://hunsalz.github.io",
  pathPrefix: "/smart-sensor-starter",

  templates: {
    Sensor: "/:title",
    Tag: "/tag/:id"
  },

  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Sensor",
        path: "content/sensors/*.md",
        refs: {
          tags: {
            typeName: "Tag",
            create: true
          }
        }
      }
    },
/*     {
      use: "gridsome-plugin-pwa",
      options: {
        title: "Smart Sensor",
        startUrl: "/",
        display: "standalone",
        statusBarStyle: "default",
        manifestPath: "/manifest.json", // see https://github.com/rishabh3112/gridsome-plugin-pwa/pull/18
        serviceWorkerPath: "/service-worker.js", // see https://github.com/rishabh3112/gridsome-plugin-pwa/pull/18
        cachedFileTypes: "js,json,css,html,png,jpg,jpeg,svg",
        shortName: "Sensors",
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
