import styled from 'styled-components';
import { Card } from '@mui/material';
import Image from './fonstola.ru_114827.jpg';

export const ImageWrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background: url(${Image}) no-repeat;
    background-size: cover;
}
`;

export const Container = styled.div`
    padding: 122px 245px;
`;

export const EditButtonWrapper = styled.div`
    position: absolute;
    bottom: 20px;
    right: 20px;
    
    button {
        color: white;
        border: 1px solid white;
    }
`;

export const ModalContent = styled(Card)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    background: white;
    border: 2px solid #000;
`;
