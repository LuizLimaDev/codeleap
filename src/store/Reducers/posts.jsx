import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "src/services/instance";

export const createUserPost = createAsyncThunk(
    'user/createPost',
    async (data) => {
        const response = await instance.post('/', data);
        return response.data;
    }
);

// export const patchUserPost = createAsyncThunk(
//     'user/createPost',
//     async (data) => {
//         const response = await instance.post('/', data);
//         return response.data;
//     }
// );

const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        getData: (state, { payload }) => {
            state.push(...state, ...payload);
            console.log('payload createPost: ', payload);
        }
    },
    extraReducers: builder => {
        builder.addCase(
            createUserPost.fulfilled,
            (state, { payload }) => {
                state.push(payload);
            }
        );
    }
});

export const { getData } = postsSlice.actions;
export default postsSlice.reducer;