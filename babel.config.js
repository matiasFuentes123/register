module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // Configuracion necesaria para usar esta libreria con el Drawer
    plugins: ["react-native-reanimated/plugin"],

  };
};
