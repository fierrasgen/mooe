import { FC } from 'react';
import { Wrapper } from './styles';
import { Navigation } from '../Navigation';

export const Header: FC = () => {
    return (
        <Wrapper> 
            <Navigation />
        </Wrapper>
    );
};