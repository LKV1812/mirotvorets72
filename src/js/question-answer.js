import './entry';
import './modules/dropdown-block';
import {callsModalWindow} from './modules/modal-window';
// import './modules/phone-mask.js';
// import {formDestruction} from './modules/form-destruction';

// const orderStorage = document.getElementById('orderStorage');
// formDestruction(orderStorage);

let buttonOpenModalWindow = document.querySelector('input[name="ask-question"]');
let modalWindowQuestion = document.getElementById('question');
callsModalWindow(buttonOpenModalWindow, modalWindowQuestion);
