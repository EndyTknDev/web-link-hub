const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname, // necessário para resolver plugins
});

module.exports = [
    {
        ignores: ["node_modules/**"],
    },
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                window: "readonly", // Para ambiente browser
                document: "readonly", // Para ambiente browser
                navigator: "readonly", // Para ambiente browser
                NodeJS: true, // Para ambiente Node.js
                global: "readonly", // Para ambiente Node.js
                // Outros globais padrão podem ser adicionados conforme necessário
            },
        },
        parserOptions: {
            project: "./tsconfig.json", // Caminho para o arquivo de configuração do TypeScript
        },
    },
    ...compat.extends(
        "eslint-config-airbnb",
        "eslint-config-airbnb-typescript",
        "eslint-config-prettier",
    ),
    {
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
        plugins: {
            "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
            "react-hooks": require("eslint-plugin-react-hooks"),
            prettier: require("eslint-plugin-prettier"),
        },
        rules: {
            "object-curly-newline": "off",
            indent: ["error", 4],
            "react/jsx-indent": "off",
            "import/no-named-as-default": "off",
            "import/export": "off",
            "no-restricted-exports": "off",
            "react/function-component-definition": "off",
            "react/jsx-props-no-spreading": "off",
            "react/prop-types": "off",
            "react/require-default-props": "off",
            "@typescript-eslint/no-unused-vars": "warn",
            "no-unused-vars": "warn",
        },
    },
];
