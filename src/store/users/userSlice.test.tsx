import { cleanup } from "@testing-library/react";
import axios from "axios";
import { setupStore } from "..";
import { usersFetching, usersFetchingError, usersFetchingSuccess } from "./userSlice";

afterEach(cleanup);

const mockedAxios = axios as jest.Mocked<typeof axios>;

const userMock = {
    id: 3503,
    name: 'John Doe',
    email: 'test@gmail.com',
    gender: 'male',
    status: 'active'
}

const store = setupStore();

describe('userSlice', () => {
    it('userSlice should return initial state', () => {
        const state = store.getState().user;
        expect(state).toEqual({
            users: [],
            isUserLoading: false,
            isUserError: false
        });
    });

    it('usersFetching change state', () => {
        store.dispatch(usersFetching());

        const state = store.getState().user;

        expect(state).toEqual({
            users: [],
            isUserLoading: true,
            isUserError: false
        });
    });

    it('usersFetchingSuccess change state', () => {
        store.dispatch(usersFetchingSuccess(userMock));
        
        const state = store.getState().user;
        
        expect(state.users[0]).toEqual(userMock);
    });

    it('usersFetchingError change state', () => {
        store.dispatch(usersFetchingError());
        
        const state = store.getState().user;
        
        expect(state.isUserError).toEqual(true);
    });
});