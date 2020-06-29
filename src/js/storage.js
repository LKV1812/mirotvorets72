import './entry';
import './modules/calculator-storage';
import './modules/phone-mask.js';
import {formDestruction} from './modules/form-destruction';

const orderStorage = document.getElementById('orderStorage');
formDestruction(orderStorage);
