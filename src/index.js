import './index.css';
import reportWebVitals from './reportWebVitals';
import {rendererEntireTree} from "./render";
import state from "./redux/state";

rendererEntireTree(state);

reportWebVitals();
