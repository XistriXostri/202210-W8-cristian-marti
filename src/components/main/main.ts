import { Component } from '../component/component.js';

export class Main extends Component {
  constructor(selector: string) {
    super();
    this.template = this.createTemplate();
    this.addRender(selector);
  }

  createTemplate() {
    return `
      <main class="main"><!--componente main-->
        <section class="series">
          <h2 class="section-title">Series list</h2>
        </section>
      </main>
    `;
  }
}
