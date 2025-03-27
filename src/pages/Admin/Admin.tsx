import React, { FC } from 'react';
import { MainHeader } from '../../features/MainHeader';

export const Admin: FC = () => {
    return (
        <div>
            <MainHeader isAdmin />
        </div>
    );
};
