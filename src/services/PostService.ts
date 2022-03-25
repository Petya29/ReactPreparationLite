import axios, { AxiosResponse } from "axios";
import { IPostsResponse } from "../models/responses/IPostsResponse";

export const getPostsAPI = async (page: number): Promise<AxiosResponse<IPostsResponse>> => {
    try {
        const response = await axios.get<IPostsResponse>(`${process.env.REACT_APP_BASE_API_URL}posts?page=${page}`);
        return response;
    } catch (e) {
        throw e;
    }
}