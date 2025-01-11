import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        filter: '',
    },
    reducers: {
        loadData: (state, action) => {
            state.posts = action.payload;
        },
        addPost: (state, action) => {
            state.posts.push(action.payload);
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.id != action.payload );
        },
        updateFilter: (state, action) => {
            state.filter = action.payload;
        }

    }
})
export const { loadData, addPost, deletePost, updateFilter } = postSlice.actions;
export default postSlice.reducer;