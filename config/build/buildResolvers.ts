import { ResolveOptions } from "webpack";

export function buildResolvers(): ResolveOptions {
    return {
        // указание расширений тех файлов для которых при импорте они не будут указываться
        extensions: ['.tsx', '.ts', '.js'],
    }
}