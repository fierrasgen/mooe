import React, { FC } from 'react';
import { Routes, Route } from 'react-router';
import { ROUTES } from '../shared/config/routes';
import { Admin } from './Admin';
import { Main } from './Main';

export const Routing: FC = () => {
    return (
        <Routes>
            <Route
                index
                path={ROUTES.INDEX}
                element={
                    <Main />
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
