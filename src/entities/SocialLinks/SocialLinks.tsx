import { FC } from 'react';
import { Stack } from '@mui/material';
import { IconLink } from './styles';
import { FacebookIcon } from './components/icons/FacebookIcon';
import { InstaIcon } from './components/icons/InstaIcon';
import { PinterestIcon } from './components/icons/PinterestIcon';
import { TIcon } from './components/icons/TIcon';
import { TwitterIcon } from './components/icons/TwitterIcon';
import { YoutubeIcon } from './components/icons/YoutubeIcon';

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
    icon: <PinterestIcon />
},{
    name: 'twitter',
    to: 'https://www.facebook.com/',
    icon: <TwitterIcon />
},{
    name: 'ti',
    to: 'https://www.facebook.com/',
    icon: <TIcon />
}]

export const SocialLinks: FC = () => {
    return (
        <Stack direction={'row'} spacing={'10px'}>{SOCIAL_NETWORK.map(item => (
            <IconLink key={item.name} target={'_blank'} href={item.to}>{item.icon}</IconLink>
            ))}
        </Stack>
    );
};
