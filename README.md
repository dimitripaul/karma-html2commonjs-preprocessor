# karma-html2commonjs-preprocessor

Preprocessor for converting HTML files into CommonJS modules.

# Karma configuration example
```javascript
module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: [
            'jasmine',
            'commonjs'
        ],
        files: [
            '*.js',
            '*.html'
        ],
        preprocessors: {
            '*.html': ['html2commonjs', 'commonjs'],
            '*.js': ['commonjs']
        },
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: true,
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-commonjs',
            'karma-html2commonjs-preprocessor'
        ]
    });
};
```