import styled from 'styled-components';
import { Link } from 'react-router';
import { Stack } from '@mui/material';

export const StyledCard = styled(Link)`
    flex: 0 0 25%;
`;

export const CardContent = styled(Stack)`
    position: relative;
    margin: 0 0 40px 40px;
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
