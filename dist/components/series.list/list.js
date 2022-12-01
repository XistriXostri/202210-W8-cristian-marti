import { Component } from '../component/component';
export class List extends Component {
    constructor(selector) {
        super();
        this.template = this.createTemplate();
        this.addRender(selector);
    }
    createTemplate() {
        return `
          <section class="series-pending">
            <h3 class="subsection-title">Pending series</h3>
            <p class="info"></p>
            <ul class="series-list"></ul>
          </section>
    `;
    }
}
