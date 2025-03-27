import { Stack, TextField } from '@mui/material';
import styled from 'styled-components';
import { Link } from 'react-router';

export const Wrapper = styled(Stack)`
`;

export const StyledLink = styled(Link)`
    color: #FEFEFE;
`;

export const SearchInput = styled(TextField)`
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
