import React, { FC } from 'react';
import { Wrapper, Title, Text, Link } from './styles';
import { Stack } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';



export const About: FC = () => {
    return (
        <Wrapper   
            direction="row" 
            spacing={"20px"}
            sx={{
                alignItems: "flex-start",
                justifyContent: "space-between"
        }}>
        
        <Title>About</Title>
        <Stack
            gap="10px"
        >
            <Text>Text</Text>
            <Link to={'/about'}><AddIcon fontSize='small' />&nbsp;more information</Link>
        </Stack>
        </Wrapper>
    );
};
