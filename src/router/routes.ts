import { FC } from "react";
import Home from "../pages/Home/Home";

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
    // {
    //     id: 2,
    //     path: 'post/:id',
    //     element: 
    // }
];