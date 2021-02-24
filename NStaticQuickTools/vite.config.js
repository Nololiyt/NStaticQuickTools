// vite.config.js
const { resolve } = require('path')
import { tools } from './tools';

let toolsPages = tools.map((tool) => ({
        [tool.guid]: resolve(__dirname, 'tools', tool.guid + ".html")
    }))
    .reduce((a, b) => ({...a, ...b }), {});

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                ...toolsPages
            }
        }
    }
}