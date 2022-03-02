import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../../pages/Home/Home';
import { routes } from '../../../router/routes';

const AppRouter: FC = () => {
    return (
        <Routes>
            {routes.map(route => (
                <Route
                    path={route.path}
                    element={<route.element />}
                    key={route.id}
                />
            ))}
            <Route
                path='*'
                element={<Home />}
            />
        </Routes>
    )
}

export default AppRouter