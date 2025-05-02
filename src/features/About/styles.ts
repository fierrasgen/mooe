import { Stack } from "@mui/material";
import styled from "styled-components";
import { Link as RouterLink } from 'react-router';

export const Wrapper = styled(Stack)`
    border-top: 2px solid #C5C6C6;
    padding: 40px 85px;

    div {
        width: calc(100% - 160px);
    }
`;

export const Title = styled.h2`
    text-transform: uppercase;
    color: #5B5B5B;
`; 

export const Text = styled.p`
    color: #2B2A29;
    font-size: 16px;
`;

export const Link = styled(RouterLink)`
    display: flex;
    align-items: center;
    align-self: end;
    color: #727271;
`;