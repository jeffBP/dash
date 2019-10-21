const presets = [
    ['@babel/env', {
        useBuiltIns: 'usage',
        corejs: 3
    }],
    '@babel/preset-react'
];

const plugins = [
    '@babel/plugin-syntax-dynamic-import'
];

// eslint-disable-next-line no-process-env
if (process.env.ENV === "test") {
    plugins.push("styled-jsx/babel-test");
} else {
    plugins.push("styled-jsx/babel");
}

module.exports = { presets, plugins };
