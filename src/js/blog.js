import './entry';
import './global/snare-network';
import {setHeightImgWrap} from './modules/handler-img';

const images = document.querySelectorAll('.news-body__img>img');
setHeightImgWrap(images, '.news-body__img');
