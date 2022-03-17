import { setupStore } from "..";
import { postsFetching, postsFetchingError, postsFetchingSuccess } from "./postSlice";

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

    it('postsFetching change state', () => {
        store.dispatch(postsFetching());

        const state = store.getState().post;

        expect(state).toEqual({
            posts: [],
            page: 1,
            isPostLoading: true,
            isPostError: false
        });
    });

    it('postsFetchingSuccess change state', () => {
        store.dispatch(postsFetchingSuccess(postMock));

        const state = store.getState().post;

        expect(state).toEqual({
            posts: postMock,
            page: 1,
            isPostLoading: false,
            isPostError: false
        });
    });

    it('postsFetchingError change state', () => {
        store.dispatch(postsFetchingError());
        
        const state = store.getState().post;
        
        expect(state.isPostError).toEqual(true);
    });
});