import './entry';
import './modules/dropdown-block';
import {callsModalWindow} from './modules/modal-window';
import {handlerFormQuestion} from './modules/form-question';



// Вызывем модальное окно с формой - задать вопрос, при ширине окна брвузера >= 992px
let buttonOpenModalWindow = document.querySelector('input[name="ask-question"]');
let modalWindowQuestion = document.getElementById('question');
callsModalWindow(buttonOpenModalWindow, modalWindowQuestion);

let formQuestion = document.getElementById('formQuestion');
handlerFormQuestion(formQuestion, modalWindowQuestion);
