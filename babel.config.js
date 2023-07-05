/**
 * FR: Configuration du module.exports pour Babel.
 * ENG: Configuration of module.exports for Babel.
 *
 * @description Ce fichier de configuration est utilisé par Babel pour transpiler le code dans un projet Expo.
 *              Il utilise le preset "babel-preset-expo" pour gérer les transformations spécifiques à Expo.
 *              De plus, il configure le plugin "module-resolver" pour gérer les alias de chemin personnalisés.
 * @param {Object} api - L'objet de l'API Babel.
 * @returns {Object} - La configuration de Babel.
 */

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // ...autres plugins
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "^~(.+)": "./src/\\1",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
    ],
  };
};
