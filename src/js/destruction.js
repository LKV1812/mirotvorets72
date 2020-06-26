import './entry';
import './modules/calculator-destruction';
import './modules/phone-mask.js';
import {formDestruction} from './modules/form-destruction';

const orderDestruction = document.getElementById('orderDestruction');
formDestruction(orderDestruction);
