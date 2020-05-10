module.exports = {
  siteName: 'Gridsome Menu',
  plugins: [
    {
      use: 'gridsome-plugin-netlify-cms'
    },
    {
      use: 'gridsome-source-menu',
      options: {
        path: 'src/content/menus/**/*.json'
      }
    }
  ]
}
