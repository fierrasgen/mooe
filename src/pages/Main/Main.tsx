import React, { FC } from 'react';
import { MainHeader } from '../../features/MainHeader';
import { CardsBlock } from '../../features/CardsBlock';
import { About } from '../../features/About';
import { Footer } from '../../features/Footer';
import { MENU_NAV } from '../../shared/config/menuNav';

export const Main: FC = () => {
    return (
        <div>
            <MainHeader />
            <CardsBlock title='products' cards={MENU_NAV} />
            <CardsBlock title='new' cards={MENU_NAV} />
            <CardsBlock title='projects' cards={MENU_NAV} />
            <About />
            <Footer />
        </div>
    );
};
