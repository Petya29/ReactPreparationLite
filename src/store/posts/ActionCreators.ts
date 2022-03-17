import axios from "axios";
import { AppDispatch } from "..";
import { IPost } from "../../models/IPost";
import { postsFetching, postsFetchingError, postsFetchingSuccess } from "./postSlice";

export const fetchPosts = (page: number = 1) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postsFetching());

        const response = await axios.get<IPost[]>(`${process.env.REACT_APP_BASE_API_URL}posts?page=${page}`);

        dispatch(postsFetchingSuccess(response.data));
    } catch (e) {
        dispatch(postsFetchingError());
    }
}