import { app } from './components/app/app.js';
import { consoleDebug } from './tools/debug.js';

(() => {
  document.addEventListener('DOMContentLoaded', () => {
    try {
      app();
    } catch (error) {
      consoleDebug((error as Error).message);
    }
  });
})();
