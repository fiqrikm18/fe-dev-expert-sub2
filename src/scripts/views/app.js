/* eslint-disable no-underscore-dangle */
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

export default class App {
  constructor({
    button,
    drawer,
    content,
  }) {
    this._buttton = button;
    this._drawer = drawer;
    this._cotent = content;

    this._initialShell();
  }

  _initialShell() {
    DrawerInitiator.init({
      button: this._buttton,
      drawer: this._drawer,
      content: this._drawer,
    });
  }

  async renderPage() {
    const url = UrlParser.parserActiveWithCombiner();
    const page = routes[url];
    this._cotent.innerHTML = await page.render();
    await page.afterRender();
  }
}
