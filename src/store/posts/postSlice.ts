import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../models/IPost";

interface IPostState {
    posts: IPost[],
    isLoading: boolean
}

const initialState: IPostState = {
    posts: [],
    isLoading: false
}

export const postSlice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {
        setPosts(state, actions: PayloadAction<IPost>) {
            state.posts.push(actions.payload);
        },
        setLoading(state, actions: PayloadAction<boolean>) {
            state.isLoading = actions.payload;
        }
    }
});

export default postSlice.reducer;
export const { setPosts } = postSlice.actions;