import {CREATE_POST, FETCH_POSTS, HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER} from './types';

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function fetchPosts() {
    return async dispatch => {
        dispatch(showLoader())
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        const json = await response.json()
        setTimeout(() => {
            dispatch({type: FETCH_POSTS, payload: json})
            dispatch(hideLoader())
        }, 500)

    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function showAlert(text, wait = 0) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })
        if (!wait) {
            return
        }
        setTimeout(() => {
            dispatch(hideAlert())
        }, wait)

    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}