import React, { FC } from 'react';
import { Stack, Link } from '@mui/material';
import { Facebook as FacebookIcon, } from '@mui/icons-material';
import { Logo, Wrapper, SocialNetworkButton, Text, Condition, Links } from './styles';

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
        <Wrapper direction={'row'} justifyContent={'space-between'} alignItems={'flex-end'}>
            <Stack direction={'row'} gap={'25px'} alignItems={'center'}>
                <Logo>MOOE</Logo>
                <Stack direction={'column'}>
                    <Text>About us</Text>
                    <Text>For professionals</Text>
                    <Text>Where to buy</Text>
                </Stack>
            </Stack>
            <Condition direction={'row'} gap={'6px'}>
                <Links>Terms and conditions</Links>
                <Links>Privacy Policy</Links>
                <Links>Cookie preferences</Links>
            </Condition>
            <Stack direction={'row'} spacing={'10px'}>{SOCIAL_NETWORK.map(item => (
                <Link key={item.name} target={'_blank'} href={item.to}>{item.icon}</Link>
            ))}</Stack>        
        </Wrapper>
    );
};
