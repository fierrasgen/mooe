import { FC } from 'react';
import { useParams } from 'react-router';
import { Header } from '../../features/Header';
import { Content } from '../styles';
import { Footer } from '../../features/Footer';
import { ImageWrapper, Image } from './styles';
import { Stack } from '@mui/material';
import { SocialLinks } from '../../entities/SocialLinks';


export const ProductCard: FC = () => {
    const { id } = useParams();
    
    return (
        <div>
            <Header />
            <Content>
                <Stack direction={'row'} gap={'80px'}>
                    <ImageWrapper>
                        <Image />
                    </ImageWrapper>
                    <Stack>
                        CONTENT
                        <SocialLinks /> 
                    </Stack>
                </Stack>
            </Content>
            <Footer />
        </div>
    );
};
