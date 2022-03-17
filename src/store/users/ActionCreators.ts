import axios from "axios";
import { AppDispatch } from "..";
import { IUser } from "../../models/IUser";
import { usersFetching, usersFetchingError, usersFetchingSuccess } from "./userSlice";

export const fetchUserByID = (id: number | string | undefined) => async (dispatch: AppDispatch) => {
    try {
        dispatch(usersFetching());

        const response = await axios.get<IUser>(`${process.env.REACT_APP_BASE_API_URL}users/${id}`);

        dispatch(usersFetchingSuccess(response.data));
    } catch (e) {
        dispatch(usersFetchingError());
    }
}