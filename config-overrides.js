const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@Assets": "src/assets",
    "@Bootstraps": "src/bootstraps",
    "@Components": "src/component",
    "@Modules": "src/modules",
    "@Layouts": "src/layouts",
    "@Utils": "src/utils",
    "@Configs": "src/config",
  })(config);

  return config;
};
