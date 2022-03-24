import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import axios from 'axios';

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
    async (id: string | number | undefined, { rejectWithValue }): Promise<any> => {
        try {
            const response = await axios.get<IUser>(`${process.env.REACT_APP_BASE_API_URL}users/${id}`);
            console.log(response.data);
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
export const {} = userSlice.actions;