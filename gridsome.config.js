// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Smart Sensor',
  siteDescription: 'Show smart sensor data',

  templates: {
    Sensor: '/:title',
    Tag: '/tag/:id'
  },

  plugins: [
    {
      // create sensor cards from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Sensor',
        path: 'content/sensors/*.md',
        refs: {
          // creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    }
  ],

  transformers: {
    // add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
