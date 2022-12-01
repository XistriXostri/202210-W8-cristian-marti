export class Component {
    template;
    element;
    selectElement(selector) {
        const error = new Error('Invalid selector');
        if (!selector)
            throw error;
        const e = document.querySelector(selector);
        if (e === null)
            throw error;
        return e;
    }
    addRender(selector) {
        this.element = this.selectElement(selector);
        this.element.innerHTML += this.template;
    }
}
