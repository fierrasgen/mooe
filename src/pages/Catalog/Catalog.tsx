import { FC } from 'react';
import { useParams } from 'react-router';
import { Header } from '../../features/Header';
import { Content } from '../styles';


export const Catalog: FC = () => {
    const { category } = useParams();
    return (
        <div>
            <Header />
            <Content>
                Catalog {category}
            </Content>
        </div>
    );
};
