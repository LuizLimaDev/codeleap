import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './Reducers/posts';

const store = configureStore({
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    reducer: {
        posts: postsReducer
    }
})

export default store;