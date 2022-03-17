import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../models/IPost";

interface IPostState {
    posts: IPost[],
    page: number,
    isPostLoading: boolean,
    isPostError: boolean
}

const initialState: IPostState = {
    posts: [],
    page: 1,
    isPostLoading: false,
    isPostError: false
}

export const postSlice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {
        postsFetching(state) {
            state.isPostLoading = true;
        },
        postsFetchingSuccess(state, action: PayloadAction<IPost[]>) {
            state.isPostLoading = false;
            state.isPostError = false;
            state.posts = action.payload;
            //state.page = state.page + 1;
        },
        postsFetchingError(state) {
            state.isPostLoading = false;
            state.isPostError = true;
        }
    }
});

export default postSlice.reducer;
export const {
    postsFetching,
    postsFetchingSuccess,
    postsFetchingError
} = postSlice.actions;