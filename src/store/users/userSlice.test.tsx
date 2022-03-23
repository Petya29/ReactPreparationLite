import { cleanup } from "@testing-library/react";
import { setupStore } from "..";
import reducer, { getUser } from './userSlice';

const initialState = {
    users: [],
    isUserLoading: false,
    isUserError: false
}

const userMock = {
    id: 3503,
    name: 'John Doe',
    email: 'test@gmail.com',
    gender: 'male',
    status: 'active'
}

const store = setupStore();

describe('userSlice', () => {

    afterEach(cleanup);

    it('userSlice should return initial state', () => {
        const state = store.getState().user;
        expect(state).toEqual(initialState);
    });

    it('sets loading to true when user is pending', () => {
        const action = { type: getUser.pending.type };

        const state = reducer(initialState, action);

        expect(state).toEqual({
            users: [],
            isUserLoading: true,
            isUserError: false
        });
    });

    it('sets loading to false and error to true when user is rejected', () => {
        const action = { type: getUser.rejected.type };

        const state = reducer(initialState, action);

        expect(state).toEqual({
            users: [],
            isUserLoading: false,
            isUserError: true
        });
    });

    it('sets user to state when user is fulfilled', () => {
        const action = { type: getUser.fulfilled.type, payload: { ...userMock } };

        const state = reducer(initialState, action);
        
        expect(state).toEqual({
            users: [{...userMock}],
            isUserLoading: false,
            isUserError: false
        })
    });
});