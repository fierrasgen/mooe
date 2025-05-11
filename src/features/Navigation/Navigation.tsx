import { FC } from 'react';
import { Button, Stack, ThemeProvider } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { Wrapper, StyledLink, SearchInput, LogoWrapper } from './styles';
import { MENU_NAV } from '../../shared/config/menuNav';
import { Logo } from './components/Logo';
import { themeAvoidanceGenevra } from '../../shared/themes';

export const Navigation: FC = ({ isAdmin }: { isAdmin?: boolean }) => {
    return (
        <Stack direction={'row'} gap={'50px'}>
            <LogoWrapper to={'/mooe'}>
                <Logo />
            </LogoWrapper>
            <Wrapper direction='row' justifyContent={'space-between'}>
                <Stack direction='row' alignItems={'center'} spacing={'50px'}>
                    {
                        MENU_NAV.map(item => (
                            <StyledLink key={item.name} to={item.to}>{item.name}</StyledLink>
                        ))
                    }
                </Stack>
                <Stack direction='row' alignItems={'center'} spacing={'50px'}>
                    <ThemeProvider theme={themeAvoidanceGenevra}>
                        <SearchInput placeholder={'Search by model'} slotProps={{
                            input: {
                                endAdornment: (
                                <SearchIcon />
                                ),
                            },
                            }}
                        />
                    </ThemeProvider>
                    <StyledLink to={'/contacts'}>CONTACTS</StyledLink>
                    {
                        isAdmin && (
                            <Button variant='contained'>Log Out</Button>
                        )
                    }
                    
                </Stack>
            </Wrapper>
        </Stack>
    );
};
