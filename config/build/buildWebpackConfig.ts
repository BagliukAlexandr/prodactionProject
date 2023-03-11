import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options;
    return {
        mode,
        // стартовая точка приложения
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            // флаг для подчистки лишних файлов
            clean: true,
        },
        // for ts
        module: {
            // для обработки того что выходит за рамки js
            rules: buildLoaders(options),
        },
        plugins: buildPlugins(options),
        resolve: buildResolvers(options),
        // для того что б можно было посмотреть где в коде ошибка
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        performance: {
            hints: false,
        },
    };
}
