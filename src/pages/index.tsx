import { FC } from 'react';
import { Routes, Route } from 'react-router';
import { ROUTES } from '../shared/config/routes';
import { Admin } from './Admin';
import { Main } from './Main';
import { About } from './About';
import { Catalog } from './Catalog';
import { Contacts } from './Contacts';
import { ProductCard } from './ProductCard';

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
            <Route
                path={ROUTES.ABOUT}
                element={
                    <About />
                }
            />
            <Route path={ROUTES.CATALOG} element={<Catalog />} />
            <Route
                path={ROUTES.CARD}
                element={
                    <ProductCard />
                }
            />
            <Route
                path={ROUTES.CONTACTS}
                element={
                    <Contacts />
                }
            />
        </Routes>
    );
};
