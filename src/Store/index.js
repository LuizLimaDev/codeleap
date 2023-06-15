import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './Reducers/posts';

const store = configureStore({
    reducer: {
        posts: postsSlice
    }
})

export default store;