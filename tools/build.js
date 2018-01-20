import webpack from 'webpack';
import webpackConfig from '../configs/webpack.configs.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for production via webpack, this will take a moment....');

webpack(webpackConfig).run((err, stats) => {
    if (err) {
        console.log(err.bold.red);
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasError) {
        return jsonStats.erros.map(error => console.log(error.red));
    }

    if (jsonStats.hasWarnings) {
        console.log('Webpack generated the following warning: '.bold.yellow);
        jsonStats.warnings.map(warnings => console.log(warnings.yellow));
    }

    console.log(`Webpack stats: ${stats}`);

    console.log(`Your app has been compiled in production mode and written to /dist. It's ready to roll!`.green);

    return 0;
})