import { Component } from '../component/component.js';

export class List extends Component {
  constructor(selector: string, listType: string) {
    super();
    this.template = this.createTemplate(listType);
    this.addRender(selector);
  }

  createTemplate(listType: string) {
    return `
          <section class="series-${listType.toLowerCase()}">
            <h3 class="subsection-title">${listType} series</h3>
            <p class="info"></p>
            <ul class="series-list"></ul>
          </section>
    `;
  }
}
