import axios, { AxiosResponse } from "axios";
import { IUser } from "../models/IUser";

export default class UserService {
    static async fetchUserById(id: number): Promise<AxiosResponse<IUser>> {
        return await axios.get<IUser>(`${process.env.REACT_APP_BASE_API_URL}/users/${id}`);
    }
}