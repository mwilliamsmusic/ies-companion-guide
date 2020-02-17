import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';

import { createStore, combineReducers } from "redux";
import { Provider} from 'react-redux';
import itemReducer from './Store/Reducers/itemReducer';
import equipReducer from './Store/Reducers/equipReducer';
import enemyReducer from './Store/Reducers/enemyReducer';

const rootReducer = combineReducers({
  item: itemReducer,
  equip: equipReducer,
  enemy: enemyReducer,
});

const store = createStore(rootReducer);

const app = (
  <BrowserRouter basename={"/IESCompanionGuide"}>
    <App/>
  </BrowserRouter>
);

ReactDOM.render(<Provider store={store}>{ app }</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
