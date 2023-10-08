// https://vitejs.dev/config/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import type { Plugin } from 'vite';
import type { Adapter } from 'vite-plugin-mix';
import mixPlugin from 'vite-plugin-mix';

interface MixConfig {
    handler: string;
    adapter?: Adapter | undefined;
}

type MixPlugin = (config: MixConfig) => Plugin;

interface Mix {
    default: MixPlugin;
}

const mix = (mixPlugin as unknown as Mix).default;

export default defineConfig({
    base: './',
    plugins: [
        react(),
        // mix({
        //     handler: './src/api/api.ts',
        // }),
    ],
});
