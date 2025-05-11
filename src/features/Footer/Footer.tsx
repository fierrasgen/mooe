import { FC } from 'react';
import { Stack, Link } from '@mui/material';
// import { Facebook as FacebookIcon, } from '@mui/icons-material';
import { Wrapper, Text, Condition, Links, LogoWrapper } from './styles';
import { Logo } from './components/icons/FooterLogo/Logo'
import { FacebookIcon } from './components/icons/FacebookIcon';
import { InstaIcon } from './components/icons/InstaIcon';
import { PinterestIcon } from './components/icons/PinterestIcon';
import { TIcon } from './components/icons/TIcon';
import { TwitterIcon } from './components/icons/TwitterIcon';
import { YoutubeIcon } from './components/icons/YoutubeIcon';

const CONDITIONS = [{
    name: 'Terms and conditions',
    link: ''
},{
    name: 'Privacy Policy',
    link: ''
},{
    name: 'Terms and conditions',
    link: 'Cookie preferences'
}]

const SOCIAL_NETWORK = [{
    name: 'facebook',
    to: 'https://www.facebook.com/',
    icon: <FacebookIcon />
},{
    name: 'youtube',
    to: 'https://www.youtube.com/',
    icon: <YoutubeIcon />
},{
    name: 'instagram',
    to: 'https://www.instagram.com/',
    icon: <InstaIcon />
},{
    name: 'pinterest',
    to: 'https://www.facebook.com/',
    icon: <TwitterIcon />
},{
    name: 'twitter',
    to: 'https://www.facebook.com/',
    icon: <PinterestIcon />
},{
    name: 'ti',
    to: 'https://www.facebook.com/',
    icon: <TIcon />
}]

export const Footer: FC = () => {
    return (
        <Wrapper direction={'row'} justifyContent={'space-between'} alignItems={'flex-end'}>
            <Stack direction={'row'} gap={'25px'} alignItems={'center'}>
                <Stack direction={'column'}>
                    <Text>Partnershp</Text>
                    <Text>Where to buy</Text>
                    <Text>Downloads</Text>
                </Stack>
            </Stack>
            <Stack direction={'column'} alignItems={'center'} gap={'10px'}>
                <LogoWrapper>
                        <Logo />
                </LogoWrapper>
                <Condition direction={'row'} gap={'6px'}>
                    {
                        CONDITIONS.map(item => (
                            <Links key={item.name} color='#D9DADA' underline='none'>{item.name}</Links>
                        ))
                    }
                </Condition>
            </Stack>
            <Stack direction={'row'} spacing={'10px'}>{SOCIAL_NETWORK.map(item => (
                <Link key={item.name} target={'_blank'} href={item.to}>{item.icon}</Link>
            ))}</Stack>        
        </Wrapper>
    );
};
