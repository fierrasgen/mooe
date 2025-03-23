import React, { FC } from 'react';
import { Button, Stack, Link, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { Wrapper } from './styles';

const NAV = [
    {
        name: 'LIGHTING',
        to: '/lighting'
    }, {
        name: 'FURNITURE',
        to: '/furniture'
    }, {
        name: 'DECORATE',
        to: '/decorate'
    }, {
        name: 'ELEMENTS',
        to: '/elements'
    }, {
        name: 'PROJECTS',
        to: '/projects'
    }
];

export const Menu: FC = () => {
    return (
        <Wrapper direction='row' justifyContent={'space-between'}>
            <Stack direction='row' alignItems={'center'} spacing={2}>
                {
                    NAV.map(item => (
                        <Link key={item.name} href={item.to} underline='none'>{item.name}</Link>
                    ))
                }
            </Stack>
            <Stack direction='row' alignItems={'center'} spacing={2}>
                <TextField placeholder={'Search by model'} slotProps={{
                    input: {
                        endAdornment: (
                        <SearchIcon />
                        ),
                    },
                    }}
                />
                <Link href={'/contacts'} underline='none'>CONTACTS</Link>
                <Button variant='contained'>Log Out</Button>
            </Stack>
        </Wrapper>
    );
};
