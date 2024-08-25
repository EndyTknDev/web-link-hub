// eslint.config.js
const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname, // necessário para resolver plugins
});

module.exports = [
    // Regras básicas e configuração do ambiente
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                window: "readonly",
                document: "readonly",
                navigator: "readonly",
                NodeJS: true,
                global: "readonly",
            },
        },
        plugins: {
            "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
            prettier: require("eslint-plugin-prettier"),
        },
        rules: {
            "object-curly-newline": "off",
            indent: ["error", 4],
        },
    },
    // Extensões do ESLint
    ...compat.extends(
        "plugin:eslint-plugin-import/recommended",
        "plugin:eslint-plugin-import/typescript",
    ),
];
