import { Stack, TextField } from '@mui/material';
import styled from 'styled-components';
import { Link } from 'react-router';

export const Wrapper = styled(Stack)`
    width: 100%;
`;

export const StyledLink = styled(Link)`
    color: #FEFEFE;

    &:hover {
        color: #000000;
    }
`;

export const SearchInput = styled(TextField)`
    > * {
        letter-spacing: 0;
    }
    div {
        border-radius: 8px;
    }

    input {
        padding: 4px 8px;
    }

    div, input, svg {
        color: #FEFEFE;
    }

    fieldset {
        border: 2px solid #EBECEC;
    }
`;

export const LogoWrapper = styled(Link)`
    display: inline-block;
    width: 4%;
    min-width: 50px;

    svg {
        display: block;
    }
`;
