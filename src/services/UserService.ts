import axios, { AxiosResponse } from "axios";
import { IUserResponse } from "../models/responses/IUserResponse";

export const getUserAPI = async (id: string | number | undefined): Promise<AxiosResponse<IUserResponse>> => {
    try {
        const response = await axios.get<IUserResponse>(`${process.env.REACT_APP_BASE_API_URL}users/${id}`);
        return response;
    } catch (e) {
        throw e;
    }
}