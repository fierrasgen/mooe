import { Stack } from '@mui/material';
import styled from 'styled-components';

export const Filters = styled(Stack)`
    margin: 0 0 40px -40px;

    label.Mui-focused {
        color: #000000;
    }

    div.Mui-focused {
        fieldset {
            border-color: #000000 !important;
        }
    }

    > div {
        flex: 0 0 25%;

        > div {
            background: #FFFFFF;
            margin-left: 40px;
        }
    }
`;