const rewireReactHotLoader = require('react-app-rewire-hot-loader-for-customize-cra');
const {
  override,
  overrideDevServer,
  watchAll,
  useBabelRc,
  useEslintRc,
  // setWebpackPublicPath
} = require('customize-cra');

module.exports = {
  webpack: override(
    // setWebpackPublicPath('/if-needed'),
    useEslintRc(),
    useBabelRc(),
    rewireReactHotLoader()
  ),
  devServer: overrideDevServer(
    watchAll(),
    config => {
      // config.publicPath = '/if-needed';
      // config.sockPath = '/if-needed/sockjs-node';
      // console.info({ config });
      return config;
    }
  ),
};
