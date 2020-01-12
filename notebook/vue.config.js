module.exports = {
    devServer: {
      port: 2333,
      open: true
    },
    lintOnSave: true,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-px2rem')({remUnit: 75}),
                ]
            }
        }
    }
}