import { Stack, Link } from '@mui/material';
import styled from 'styled-components';

export const Wrapper = styled(Stack)`
    border-top: 2px solid #C5C6C6;
    background: #5B5B5B;
    padding: 14px 23px;
`;


export const Logo = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid white;
`;

export const Text = styled.text`
    text-transform: uppercase;
    color: #EBECEC;
    font-size: 16px;
`;

export const Condition = styled(Stack)`

`;

export const Links = styled(Link)`
    color: #D9DADA;
    font-size: 14px;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: #000000;
    }
`;