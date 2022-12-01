export const app = () => {
    new Header('.container');
    new Main('.container');
    const countSeries = numOfSeries(series);
    new List('.series', 'Pending', `You have ${countSeries[1]} series pending to watch`);
    new List('.series', 'Watched', `You have watched ${countSeries[1]} series`);
    series.forEach((serie) => {
        if (serie.watched)
            new Serie('.series-watched ul', serie);
        else
            new Serie('.series-pending ul', serie);
    });
};
const numOfSeries = (mockSeries) => {
    let countWatched = 0;
    let countPending = 0;
    mockSeries.forEach((serie) => {
        if (serie.watched) {
            countWatched++;
        }
        else {
            countPending++;
        }
        return [countWatched, countPending];
    });
};
export class List extends Component {
    constructor(selector, listType, info) {
        super();
        this.template = this.createTemplate(listType, info);
        this.addRender(selector);
    }
    createTemplate(listType, info) {
        return `
          <section class="series-${listType.toLowerCase()}">
            <h3 class="subsection-title">${listType} series</h3>
            <p class="info">${info}</p>
            <ul class="series-list"></ul>
          </section>
    `;
    }
}
