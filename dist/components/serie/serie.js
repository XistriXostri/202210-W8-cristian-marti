import { Component } from '../component/component.js';
export class Serie extends Component {
    constructor(selector, serie) {
        super();
        this.template = this.createTemplate(serie);
        this.addRender(selector);
    }
    createTemplate(serie) {
        return `
          <li class="serie" id="serieID-${serie.id}">
                <img
                  class="serie__poster"
                  src="${serie.poster}"
                  alt="${serie.name} poster"
                />
                <h4 class="serie__title">${serie.name}</h4>
                <p class="serie__info">${serie.creator} (${serie.year})</p>
                <ul class="score">
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="5/5"></i>
                  </li>
                </ul>
                <i class="fas fa-times-circle icon--delete" id="deleteSerieID-${serie.id}"></i>
              </li>
    `;
    }
}
