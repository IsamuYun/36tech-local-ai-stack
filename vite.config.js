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
        ['src/pages/home/index.html', 'services/index.html'],
        ['src/pages/home/index.html', 'en/index.html'],
        ['src/pages/home/index.html', 'en/services/index.html'],
        ['src/pages/cn/index.html', 'cn/index.html'],
        ['src/pages/home/index.html', 'cn/services/index.html'],
        ['src/pages/local-ai/index.html', 'local-ai/index.html'],
        ['src/pages/local-ai/index.html', 'en/local-ai/index.html'],
        ['src/pages/local-ai/index.html', 'cn/local-ai/index.html'],
        ['src/pages/contact/index.html', 'contact/index.html'],
        ['src/pages/contact/index.html', 'en/contact/index.html'],
        ['src/pages/contact/index.html', 'cn/contact/index.html'],
        ['src/pages/works/index.html', 'works/index.html'],
        ['src/pages/works/index.html', 'en/works/index.html'],
        ['src/pages/works/index.html', 'cn/works/index.html'],
        ['src/pages/en/works/hikvision-aem-migration.html', 'en/works/hikvision-aem-migration.html'],
        ['src/pages/en/works/hikvision-aem-migration.html', 'cn/works/hikvision-aem-migration.html'],
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
        cn: resolve(__dirname, 'src/pages/cn/index.html'),
        localAi: resolve(__dirname, 'src/pages/local-ai/index.html'),
        contact: resolve(__dirname, 'src/pages/contact/index.html'),
        works: resolve(__dirname, 'src/pages/works/index.html'),
        hikvisionAemMigration: resolve(__dirname, 'src/pages/en/works/hikvision-aem-migration.html'),
      },
    },
  },
});
