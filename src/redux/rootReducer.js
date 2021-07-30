import {combineReducers} from 'redux';
import {postsReducer} from './reducers/postsReducer';
import {appReducer} from './reducers/appReducer';

export const rootReducer = combineReducers({
    posts: postsReducer,
    app: appReducer
})