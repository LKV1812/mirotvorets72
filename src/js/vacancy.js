import './entry';
import {filterByTitle} from './modules/filter-by-title';
import './modules/selects';

const parentFilter = document.querySelector('.vacancy');
let titles = parentFilter.querySelectorAll('.vacancy-body__title');
let asideFilter = parentFilter.querySelector('.filter-aside__button-wrap');
let select = parentFilter.querySelector('.select');

filterByTitle(titles, asideFilter, select);
