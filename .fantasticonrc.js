module.exports = {
    inputDir: './icons', // (required)
    outputDir: './dev/fonts/', // (required)
    fontTypes: ['ttf', 'woff', 'woff2'],
    assetTypes: ['ts', 'css', 'json', 'html'],
    fontsUrl: './fonts',
    // codepoints: {
    //   'image': 0xe000, // decimal representation of 0xe000
    // },
    prefix: 'icn',
    formatOptions: {
        types: ['constant', 'literalId'],
    },
}