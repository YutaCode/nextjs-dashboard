import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    // ここで設定を追加して、自動検出をスキップさせます
    settings: {
      react: {
        version: "19.0" // または "18.0"。Next.js 15以上なら19でOKです
      }
    }
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;