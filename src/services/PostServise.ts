import axios, { AxiosResponse } from "axios";
import { IPost } from "../models/IPost";

export default class PostService {
    static async fetchPosts(page: number = 1, limit: number = 5): Promise<AxiosResponse<IPost[]>> {
        return await axios.get<IPost[]>(`${process.env.REACT_APP_BASE_API_URL}posts?page=${page}`);
    }

    static async fetchPost(id: number | string | undefined): Promise<AxiosResponse<IPost>> {
        return await axios.get<IPost>(`${process.env.REACT_APP_BASE_API_URL}posts/${id}`);
    }
}