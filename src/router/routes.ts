import { FC } from "react";
import Home from "../pages/Home/Home";
import Post from "../pages/Posts/Post";
import User from "../pages/User/User";

interface IRoute {
    id: number,
    path: string,
    element: FC
}

export const routes: IRoute[] = [
    {
        id: 1,
        path: '/',
        element: Home
    },
    {
        id: 2,
        path: 'post/:id',
        element: Post
    },
    {
        id: 3,
        path: 'user/:id',
        element: User
    }
];