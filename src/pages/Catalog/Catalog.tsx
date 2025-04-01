import { FC } from 'react';
import { useParams } from 'react-router';
import { Header } from '../../features/Header';

export const Catalog: FC = () => {
    const { category } = useParams();
    return (
        <div>
            <Header />
            Catalog {category}
        </div>
    );
};
