module.exports = {
    devServer: {
        proxy: {
            '/api/bacteriocin_info': {
                target: "http://localhost:3000",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}