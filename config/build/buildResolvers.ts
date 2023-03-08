import { ResolveOptions } from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        // указание расширений тех файлов для которых при импорте они не будут указываться
        extensions: ['.tsx', '.ts', '.js'],
        // для абсолютных импортов
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {}
    }
}