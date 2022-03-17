import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface IUserSlice {
    users: IUser[],
    isUserLoading: boolean,
    isUserError: boolean
}

const initialState: IUserSlice = {
    users: [],
    isUserLoading: false,
    isUserError: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        usersFetching(state) {
            state.isUserLoading = true;
        },
        usersFetchingSuccess(state, action: PayloadAction<IUser>) {
            state.isUserLoading = false;
            state.isUserError = false;
            state.users.push(action.payload);
        },
        usersFetchingError(state) {
            state.isUserLoading = false;
            state.isUserError = true;
        }
    }
});

export default userSlice.reducer;
export const {
    usersFetching,
    usersFetchingSuccess,
    usersFetchingError
} = userSlice.actions;