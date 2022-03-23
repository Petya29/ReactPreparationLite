import { setupStore } from "..";
import reducer, { getPosts } from "./postSlice";

const initialState = {
    posts: [],
    page: 1,
    isPostLoading: false,
    isPostError: false
}

const postMock = [{
    id: 1703,
    user_id: 3503,
    title: 'title 1',
    body: 'body 1'
}]

const store = setupStore();

describe('postSlice', () => {
    it('userSlice should return initial state', () => {
        const state = store.getState().post;
        expect(state).toEqual({
            posts: [],
            page: 1,
            isPostLoading: false,
            isPostError: false
        });
    });

    it('sets loading to true when posts are pending', () => {
        const action = { type: getPosts.pending.type };

        const state = reducer(initialState, action);

        expect(state).toEqual({
            posts: [],
            page: 1,
            isPostLoading: true,
            isPostError: false
        });
    });

    it('sets loading to false and error to true when posts are rejected', () => {
        const action = { type: getPosts.rejected.type };

        const state = reducer(initialState, action);

        expect(state).toEqual({
            posts: [],
            page: 1,
            isPostLoading: false,
            isPostError: true
        });
    });

    it('sets posts to state when posts are fulfilled', () => {
        const action = { type: getPosts.fulfilled.type, payload: { ...postMock } };

        const state = reducer(initialState, action);
        
        expect(state).toEqual({
            posts: { ...postMock },
            page: 1,
            isPostLoading: false,
            isPostError: false
        });
    });
});