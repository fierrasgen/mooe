import { FC } from 'react';
import { Button, Stack } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { Wrapper, StyledLink, SearchInput } from './styles';
import { MENU_NAV } from '../../shared/config/menuNav';

export const Navigation: FC = ({ isAdmin }: { isAdmin?: boolean }) => {
    return (
        <Wrapper direction='row' justifyContent={'space-between'}>
            <Stack direction='row' alignItems={'center'} spacing={'19px'}>
                {
                    MENU_NAV.map(item => (
                        <StyledLink key={item.name} to={item.to}>{item.name}</StyledLink>
                    ))
                }
            </Stack>
            <Stack direction='row' alignItems={'center'} spacing={'19px'}>
                <SearchInput placeholder={'Search by model'} slotProps={{
                    input: {
                        endAdornment: (
                        <SearchIcon />
                        ),
                    },
                    }}
                />
                <StyledLink to={'/contacts'}>CONTACTS</StyledLink>
                {
                    isAdmin && (
                        <Button variant='contained'>Log Out</Button>
                    )
                }
                
            </Stack>
        </Wrapper>
    );
};
