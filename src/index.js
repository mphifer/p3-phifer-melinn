import './styles.css';
import { header } from './modules/header';
import { lunchGen } from './modules/lunch-generator';
import { footer } from './modules/footer';

class App {

  constructor() {
    this.renderTemplate();
    lunchGen.logSomethingToTheConsole();
  }

  renderTemplate() {
    const template = `

      <header>
      <h1>${header.headerTitle}</h1>
      <h2>${header.headerPhrase}</h2>
      </header>

      <main>
      <section class="menu">

      <div>
        <img src="../images/fries.png" alt="french fries sketch icon" title="french fries sketch icon" />
        <h3>Appetizer</h3>
        <p id="place">sample</p>
      </div>

      <div>
        <img src="../images/sandwich.png" alt="sandwich sketch icon" title="sandwich sketch icon" />
        <h3>Main Course</h3>
        <p id="place"></p>
      </div>

      <div>
        <img src="../images/cupcake.png" alt="cupcake sketch icon" title="cupcake sketch icon" />
        <h3>Dessert</h3>
        <p id="place"></p>
      </div>

      <button id="click-me">Surprise Me!</button>
      </section>
      </main>

      <footer>
        <p class="footer-title">${footer.footerTitle}</p>
        <p class="footer-phrase">${footer.footerPhrase}</p>
      </footer>

      `;

    document.body.innerHTML = template;
  }
}

new App;
