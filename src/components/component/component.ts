export abstract class Component {
  protected template!: string;
  private element!: Element | null;

  private selectElement(selector: string): Element {
    const error = new Error('Invalid selector');
    if (!selector) throw error;
    const e = document.querySelector(selector);
    if (e === null) throw error;
    return e;
  }

  addRender(selector: string) {
    this.element = this.selectElement(selector);
    this.element.innerHTML += this.template;
  }
}
