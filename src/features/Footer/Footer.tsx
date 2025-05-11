import { FC } from 'react';
import { Stack, ThemeProvider, Typography } from '@mui/material';
// import { Facebook as FacebookIcon, } from '@mui/icons-material';
import { Wrapper, Condition, LogoWrapper, StyledLink } from './styles';
import { Logo } from '../../entities/SocialLinks/components/icons/FooterLogo/Logo'
import { themeAvoidanceGenevra } from '../../shared/themes';
import { SocialLinks } from '../../entities/SocialLinks';

const CONDITIONS = [{
    name: 'Terms and conditions',
    link: ''
},{
    name: 'Privacy Policy',
    link: ''
},{
    name: 'Terms and conditions',
    link: 'Cookie preferences'
}];

export const Footer: FC = () => {
    return (
        <ThemeProvider theme={themeAvoidanceGenevra}>
            <Wrapper direction={'row'} justifyContent={'space-between'} alignItems={'flex-end'}>
                    <Stack direction={'column'}>
                        <StyledLink color='#D9DADA' underline='none'>
                            <Typography>Partnership</Typography>
                        </StyledLink>
                        <StyledLink color='#D9DADA' underline='none'>
                            <Typography>Where to buy</Typography>
                        </StyledLink>
                        <StyledLink color='#D9DADA' underline='none'>
                            <Typography>Downloads</Typography>
                        </StyledLink>
                    </Stack>
                <Stack direction={'column'} alignItems={'center'} gap={'10px'}>
                    <LogoWrapper>
                            <Logo />
                    </LogoWrapper>
                    <Condition direction={'row'} gap={'12px'}>
                        {
                            CONDITIONS.map(item => (
                                <StyledLink key={item.name} color='#D9DADA' underline='none'>
                                    <Typography>{item.name}</Typography>
                                </StyledLink>
                            ))
                        }
                    </Condition>
                </Stack>
                <SocialLinks />       
            </Wrapper>
        </ThemeProvider>
    );
};
