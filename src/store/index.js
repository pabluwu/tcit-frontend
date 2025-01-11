import { configureStore } from '@reduxjs/toolkit'
import postSliceReducer, { addPost, deletePost } from './post/slice'

import { API } from '../assets/variables';

const syncWithDatabase = store => next => action => {
    next(action);
    const { type, payload } = action;
    if (type === 'post/deletePost') {
        fetch(`${API}post/${payload}`, {
            method: "DELETE",
        })
            .then(res => {
                if (res.ok) return res.json();
            })
            .catch(err => {
                console.log(err);
            })
    }
}
export const store = configureStore({
    reducer: {
        post: postSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(syncWithDatabase),

})