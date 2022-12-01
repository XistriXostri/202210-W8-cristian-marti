import { series } from '../../mock/series.js';
import { Header } from '../header/header.js';
import { List } from '../list/list.js';
import { Main } from '../main/main.js';
import { Serie } from '../serie/serie.js';

export const app = () => {
  new Header('.container');
  new Main('.container');
  new List('.series', 'Pending');
  new List('.series', 'Watched');
  series.forEach((serie) => {
    if (serie.watched) new Serie('.series-watched ul', serie);
    else new Serie('.series-pending ul', serie);
  });
};
