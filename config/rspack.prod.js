const {
    name, filename, exposes, shared, remotes
} = require('./remote');
const paths = require('./paths');
const publicPath= {
    offline: '/',
    preonline: 'https://baidu.com/',
    online: 'https://baidu.com/',
}
const rspack = require('@rspack/core');

const STAGE = process.env.STAGE;
const product = name;

module.exports = {
    mode: 'development',
    devtool: false,
    bail: true,
    entry: {
        app: paths.indexJS
    },
    output: {
        path: paths.build,
        publicPath: publicPath[STAGE],
        filename: `${product}/static/js/[name].[contenthash:8].js`,
        chunkFilename: `${product}/static/js/[name].[contenthash:8].chunk.js`,
        assetModuleFilename: `${product}/static/media/[name].[hash:8].[ext]`
    },
    experiments: {
        css: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            app: paths.appSrc
        }
    },
    module: {
        rules: [
            {
                test: /\.(jsx?|tsx?)$/,
                use: [
                    {
                        loader: 'builtin:swc-loader',
                        options: {
                            jsc: {
                                parser: {
                                    syntax: 'typescript',
                                    tsx: true
                                },
                                transform: {
                                    react: {
                                        runtime: 'automatic',
                                        development: false,
                                        refresh: false
                                    }
                                }
                            },
                            env: {
                                mode: 'usage',
                                coreJs: 3,
                                targets: [
                                    'chrome >= 49',
                                    'edge >= 14',
                                    'firefox >= 45',
                                    'safari >= 10',
                                    'ie >= 11'
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false
                }
            }]
    },
    plugins: [
        new rspack.DefinePlugin({
            'process.env': {STAGE: JSON.stringify(STAGE)}
        }),
        new rspack.container.ModuleFederationPluginV1({
            name, filename, exposes, shared, remotes
        })
    ]
}