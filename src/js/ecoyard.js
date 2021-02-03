import './entry';
import './modules/phone-mask.js';
import './section/map-ecoyard';
import {formSale} from './modules/form-sale';

const orderContainer = document.getElementById('orderContainer');
formSale(orderContainer);
