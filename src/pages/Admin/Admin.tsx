import React, { FC } from 'react';
import { Header } from '../../features/Header';

export const Admin: FC = () => {
    return (
        <div>
            <Header isAdmin />
        </div>
    );
};
