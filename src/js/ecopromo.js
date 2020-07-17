import './entry';
import './modules/tabs';
import './section/map-promo';
import './modules/dropdown-block';
import './modules/phone-mask.js';
import {formPromo} from './modules/form-promo';

const orderDestruction = document.getElementById('orderPromo');
formPromo(orderDestruction);
