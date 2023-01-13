import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import { retrieveMovie, navigation } from './modules/display-cards.js';
import { RenderpopUp } from './modules/render-popup.js';

retrieveMovie();
RenderpopUp();
navigation();
