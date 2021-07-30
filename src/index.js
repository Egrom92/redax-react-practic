import React from 'react';
import {render} from 'react-dom';
import {rootReducer} from './redux/rootReducer';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk'
import App from './App';
import {Provider} from 'react-redux';
import {forbiddenWordsMiddleware} from './redux/middlewares/forbiddenWordsMiddleware';

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk, forbiddenWordsMiddleware
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)
render(app, document.getElementById('root'));

