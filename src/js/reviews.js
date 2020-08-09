import './entry';
import {callsModalWindow} from './modules/modal-window';
import {formFull} from './modules/form-full';
// import {handlerFormQuestion} from './modules/form-question';

// Вызывем модальное окно с формой - задать вопрос, при ширине окна брвузера >= 992px
let buttonOpenModalWindow = document.querySelector('input[name="review"]');
let modalWindowQuestion = document.getElementById('reviews');
callsModalWindow(buttonOpenModalWindow, modalWindowQuestion);

// Передаем форму на обработку
formFull(document.getElementById('reviews'));
