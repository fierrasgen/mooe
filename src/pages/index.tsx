import React, { FC } from 'react';
import { Routes, Route } from 'react-router';
import { ROUTES } from '../shared/config/routes';
import { Admin } from './Admin';

export const Routing: FC = () => {
    return (
        <Routes>
            <Route
                index
                path={ROUTES.INDEX}
                element={
                    <h1>Главная</h1>
                }
            />
            <Route
                path={ROUTES.ADMIN}
                element={
                    <Admin />
                }
            />
        </Routes>
    );
};
