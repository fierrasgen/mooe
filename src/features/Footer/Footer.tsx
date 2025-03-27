import React, { FC } from 'react';
import { Stack, Link } from '@mui/material';
import { Facebook as FacebookIcon, } from '@mui/icons-material';
import { Logo, Wrapper, SocialNetworkButton } from './styles';

const SOCIAL_NETWORK = [{
    name: 'facebook',
    to: 'https://www.facebook.com/',
    icon: <FacebookIcon />
},{
    name: 'youtube',
    to: 'https://www.youtube.com/',
    icon: <FacebookIcon />
},{
    name: 'instagram',
    to: 'https://www.instagram.com/',
    icon: <FacebookIcon />
},{
    name: 'pinterest',
    to: 'https://www.facebook.com/',
    icon: <FacebookIcon />
},{
    name: 'twitter',
    to: 'https://www.facebook.com/',
    icon: <FacebookIcon />
}]

export const Footer: FC = () => {
    return (
        <Wrapper>
            <Logo>MOOE</Logo>
            <Stack direction={'row'} spacing={'10px'}>{SOCIAL_NETWORK.map(item => (
                <Link key={item.name} target={'_blank'} href={item.to}>{item.icon}</Link>
            ))}</Stack>        
        </Wrapper>
    );
};
