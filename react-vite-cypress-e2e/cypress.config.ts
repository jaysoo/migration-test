import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'echo start && nx run react-vite-cypress:serve-static',
        production: 'echo start && nx run react-vite-cypress:serve-static',
      },
      ciWebServerCommand: 'echo start && nx run react-vite-cypress:serve-static',
    }),
    baseUrl: 'http://localhost:5001',
  },
});
