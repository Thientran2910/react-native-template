module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    env: {
        production: {
            plugins: ['transform-remove-console'],
        },
    },
    plugins: [
        '@babel/plugin-transform-runtime',
        [
            'module-resolver',
            {
                root: ['.'],
                alias: {
                    '@assets': './assets',
                    '@images': './assets/images',
                    '@actions': './src/actions',
                    '@components': './src/components',
                    '@constants': './src/constants',
                    '@hooks': './src/hooks',
                    '@i18n': './src/i18n',
                    '@screens': './src/screens',
                    '@selectors': './src/selectors',
                    '@store': './src/store',
                    '@utils': './src/utils',
                    '@navigation': './src/navigation',
                    '@styles': './src/styles',
                },
            },
        ],
    ],
    exclude: ['**/*.png', '**/*.jpg', '**/*.gif'],
};
