import {CREATE_POST} from '../types';
import {showAlert} from '../actions';

const forbidden = ['спам', 'рот', 'глаз'];

export const forbiddenWordsMiddleware = ({dispatch}) => {
    return function (next) {
        return function (action) {
            if (action.type === CREATE_POST) {
                const found = forbidden.filter(w => action.payload.title.includes(w))
                if(found.length) {
                    return dispatch(showAlert(`Слово ${found} запрещено у нас`, 2000))
                }
            }
            return next(action)
        }
    }
}