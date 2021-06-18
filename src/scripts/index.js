import App from './views/app';
import 'regenerator-runtime'; /* for async await transpile */
import swRegister from './utils/sw-register';

import '../styles/main.css';

const button = document.getElementById('hamburger');
const drawer = document.getElementById('drawer');
const content = document.getElementById('main-content');

const app = new App({
  button,
  drawer,
  content,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
