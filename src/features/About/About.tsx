import { FC } from 'react';
import { Wrapper, Title, Text, Link } from './styles';
import { Stack, ThemeProvider, Typography } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { themeAvoidanceGenevra } from '../../shared/themes';



export const About: FC = () => {
    return (
        <Wrapper   
            direction="row" 
            spacing={"40px"}
            sx={{
                alignItems: "flex-start",
                justifyContent: "space-between"
        }}>
        
        <Title>About</Title>
        <Stack
            gap="10px"
        >
            <Text>Text</Text>
                <Link to={'/about'}>
                    <AddIcon fontSize='small' />
                    <ThemeProvider theme={themeAvoidanceGenevra}>
                        <Typography>
                            &nbsp;more information
                        </Typography>
                    </ThemeProvider>
                </Link>
        </Stack>
        </Wrapper>
    );
};
