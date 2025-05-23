import styled from 'styled-components';
import { Stack } from '@mui/material';

export const Wrapper = styled(Stack)`
    position: relative;
    border-top: 2px solid #C5C6C6;
    padding: 40px 85px;
`;

export const Title = styled.h2`
    text-transform: uppercase;
    color: #5B5B5B;
`; 

export const Card = styled.div`
    flex: 0 0 25%;
`;

export const CardContent = styled(Stack)`
    position: relative;
    margin-left: 40px;
    height: calc(100vw*0.2*0.84);
    cursor: pointer;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: transparent;
        transition: background 0.3s ease-in-out;
    }

    p {
        text-transform: uppercase;
        color: #898989;
        font-size: 20px;
        z-index: 1;
        transition: color 0.3s ease-in-out;
    }

    &:hover {
        &::after {
            background: rgba(114, 114, 113, 0.9);
        }

        p {
            color: #FEFEFE;
        }
    }
`;

export const Image = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(https://shop.getty.edu/cdn/shop/products/G019AH_1200x.jpg?v=1621057374) no-repeat;
    background-size: cover;
`;

export const Slider = styled.div<{ $withTitle?: boolean}>`
    width: calc(100% - 160px);
    overflow: hidden;
`;

export const SliderControl = styled.button<{ $isRight?: boolean }>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    outline: none !important;
    border: none;
    left: ${({ $isRight }) => $isRight ? 'auto' : '140px'};
    right: ${({ $isRight }) => !$isRight ? 'auto' : '20px'};
    color: #5B5B5B;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: #000000;
    }
`;
