import './entry';
import './modules/basket';
import {callsModalWindow} from './modules/modal-window';
import {formFull} from './modules/form-full';
import './modules/calculator-sale';

let buttonOpenModalWindow = document.querySelector('.basket');
let modalWindowQuestion = document.getElementById('palletsBasket');
callsModalWindow(buttonOpenModalWindow, modalWindowQuestion);

let basketForm = document.getElementById('basketForm');
formFull(basketForm);
