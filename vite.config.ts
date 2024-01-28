import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react';
// @ts-ignore
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    // @ts-ignore
    const env = loadEnv(mode, process.cwd(), '');
    const isDev = env.NODE_ENV === 'development';

    return {
        resolve: {
            alias: {
                // @ts-ignore
                '@': path.resolve(__dirname, 'src'),
            }
        },
        plugins: [react()],
        css: {
            modules: {
                scopeBehaviour: 'local',
                localsConvention: 'dashesOnly',
                generateScopedName: 'sdk-[local]_[hash:base64:5]'
            },
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                },
            }
        },
        build: {
            target: 'es2015',
            lib: {
                entry: 'src/Entry.tsx',
                name: 'react-sdk',
                fileName: 'index',
            },
            rollupOptions: {
                external: ['react', 'react-dom'],
                output: {
                    globals: {
                        react: 'React',
                        'react-dom': 'ReactDOM',
                    }
                }
            }
        }
    };
})
