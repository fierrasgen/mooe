import React, { FC } from 'react';
import { Header } from '../../features/Header';
import { CardsBlock } from '../../features/CardsBlock';
import { About } from '../../features/About';
import { Footer } from '../../features/Footer';

const PRODUCTS = [{
    name: 'lighting',
    href: '/lighting'
}, {
    name: 'furniture',
    href: '/furniture'
}, {
    name: 'decorate',
    href: '/decorate'
}, {
    name: 'elements',
    href: '/elements'
}];

export const Main: FC = () => {
    return (
        <div>
            <Header />
            <CardsBlock title='products' cards={PRODUCTS} />
            <CardsBlock title='new' cards={PRODUCTS} />
            <CardsBlock title='projects' cards={PRODUCTS} />
            <About />
            <Footer />
        </div>
    );
};
