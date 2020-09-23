import './entry';
import './modules/basket';
import {callsModalWindow} from './modules/modal-window';

let buttonOpenModalWindow = document.querySelector('.basket');
let modalWindowQuestion = document.getElementById('palletsBasket');
callsModalWindow(buttonOpenModalWindow, modalWindowQuestion);
