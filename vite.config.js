import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function exposePageRoutes() {
  return {
    name: 'expose-page-routes',
    apply: 'build',
    async closeBundle() {
      const routes = [
        ['src/pages/home/index.html', 'home/index.html'],
        ['src/pages/local-ai/index.html', 'local-ai/index.html'],
      ];

      await Promise.all(
        routes.map(async ([sourcePath, targetPath]) => {
          const source = resolve(__dirname, 'dist', sourcePath);
          const target = resolve(__dirname, 'dist', targetPath);

          await mkdir(dirname(target), { recursive: true });
          await copyFile(source, target);
        }),
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), exposePageRoutes()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'src/pages/home/index.html'),
        localAi: resolve(__dirname, 'src/pages/local-ai/index.html'),
      },
    },
  },
});
