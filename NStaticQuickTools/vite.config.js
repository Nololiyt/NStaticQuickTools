// vite.config.js
const { resolve } = require('path')
const { readdirSync } = require('fs')

const tools = readdirSync('./tools').filter(f => f.endsWith('.html'))
    .map((name) => ({
        [name]: resolve(__dirname, 'tools', name)
    }))
    .reduce((a, b) => ({...a, ...b }), {})

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
    base: '',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                ...tools
            }
        }
    }
}