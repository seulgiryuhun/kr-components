import * as path from 'path';

import { defineConfig } from 'vitest/config';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  test: {
    globals: true, // 전역 객체를 사용할 수 있게 해줍니다
    environment: 'jsdom', // node에는 dom이 없기 때문에, js로 된 dom 구현체를 사용합니다
    setupFiles: './setup.ts', // 테스트 실행 전에 실행할 파일을 지정합니다
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.tsx'),
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
    commonjsOptions: {
      esmExternals: ['react'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [dts(), tsconfigPaths()],
});
