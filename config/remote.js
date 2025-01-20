
const port  = 8099;
const name = 'demo';
const filename = `${name}/${name}.js`;
const devPublicPath = `/`;
const publicPath= {
    online: 'https://demo.com/',
}
module.exports = {
    port,
    name,
    filename,
    devPublicPath: `http:${devPublicPath}`,
    exportRemote: `${name}@${publicPath.version || publicPath[process.env.STAGE] || devPublicPath}${filename}`,
    exposes: {
        './App': './src/modules/App/index.js'
    },
};
