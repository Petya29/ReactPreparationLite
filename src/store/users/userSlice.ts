import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { AxiosResponse } from 'axios';
import { getUserAPI } from "../../services/UserService";
import { IUserResponse } from "../../models/responses/IUserResponse";

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

export const getUser = createAsyncThunk(
    'user/getUser',
    async (id: string | number | undefined, { rejectWithValue }): Promise<AxiosResponse<IUserResponse> | any> => {
        try {
            const response = await getUserAPI(id);
            return response.data;
        } catch (e: any) {
            return rejectWithValue(e?.response?.data?.message || 'User not found');
        }
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state) => {
            state.isUserLoading = true;
        });
        builder.addCase(getUser.fulfilled, (state, action: PayloadAction<IUser>) => {
            state.isUserLoading = false;
            state.isUserError = false;
            state.users.push(action.payload);
        });
        builder.addCase(getUser.rejected, (state) => {
            state.isUserLoading = false;
            state.isUserError = true;
        });
    }
});

export default userSlice.reducer;
// export const {} = userSlice.actions;