import { header } from './modules/header';
import { footer } from './modules/footer';

class App {

  constructor() {
    this.renderTemplate();
    body.logSomethingToTheConsole();
  }

  renderTemplate() {
    const template = `

      <header>
      <h1>${header.headerTitle}</h1>
      <h2>${header.headerPhrase}</h2>
      </header>

      <main>
      </main>

      <footer>
      <h3>${footer.footerTitle}</h3>
      <p>${footer.footerPhrase}</p>
      </footer>

      `;

    document.body.innerHTML = template;
  }
}

new App;
