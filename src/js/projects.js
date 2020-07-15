import './entry';
import {switchesPages} from './modules/pagination';

let elem = document.querySelector('.pagination');
let notes = document.querySelectorAll('.card-full-width');
switchesPages(elem, notes, 6);
