import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { IPost } from "../../models/IPost";
import { IPostsResponse } from "../../models/responses/IPostsResponse";
import { getPostsAPI } from "../../services/PostService";

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

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async function (page: number, { rejectWithValue }): Promise<AxiosResponse<IPostsResponse> | any> {
        try {
            const response = await getPostsAPI(page);
            return response.data;
        } catch (e: any) {
            return rejectWithValue(e?.response?.data?.message || 'Something going wrong');
        }
    }
)

export const postSlice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state) => {
            state.isPostLoading = true;
        });
        builder.addCase(getPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
            state.isPostLoading = false;
            state.isPostError = false;
            state.posts = action.payload;
        });
        builder.addCase(getPosts.rejected, (state) => {
            state.isPostLoading = false;
            state.isPostError = true;
        });
    }
});

export default postSlice.reducer;
// export const {} = postSlice.actions;