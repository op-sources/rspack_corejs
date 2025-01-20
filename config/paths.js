const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const jsLoaderModules = ['react-suspense-boundary'];

module.exports = {
    appSrc: resolveApp('src'),
    indexJS: resolveApp('src/modules/App/index.js'),
    sharedDeps: resolveApp('../_commons/config/sharedDeps'),
    dlsToken: resolveApp('../common-libs/src/styles/common.less'),
    build: resolveApp('build'),
    jsLoaderModulePaths: jsLoaderModules.map(i => resolveApp(`node_modules/${i}`)),
    dist: resolveApp('dist')
};
