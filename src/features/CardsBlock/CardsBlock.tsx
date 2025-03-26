import React, { FC } from 'react';
import { useNavigate } from 'react-router';
import { Wrapper, Title, Card, Image } from './styles';
import { Stack } from '@mui/material';

interface CardsBlockProps {
    title: string;
    cards: Array<{ name: string, href: string}>;
}

export const CardsBlock: FC<CardsBlockProps> = ({ title, cards }) => {
    const navigate = useNavigate();
    return (
        <Wrapper 
            direction="row" 
            spacing={"20px"}
            sx={{
                alignItems: "flex-start",
                justifyContent: "space-between"
            }}>

            <Title>{title}</Title>
            <Stack direction="row" gap={'20px'} style={{ width: '80%'}}>
                {
                    cards?.map((card, index) => (
                        <Card 
                            key={index} 
                            onClick={() => navigate(card.href)}
                            sx={{
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Image />
                                <p>{card.name}</p>
                        </Card>
                        )
                    )
                }
            </Stack>
            
        </Wrapper>
    );
};
