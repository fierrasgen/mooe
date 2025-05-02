import { FC } from 'react';
import { useNavigate } from 'react-router';
import { Wrapper, Title, Card, Image } from './styles';
import { Stack } from '@mui/material';

interface CardsBlockProps {
    title: string;
    cards: Array<{ name: string, to: string}>;
}

export const CardsBlock: FC<CardsBlockProps> = ({ title, cards }) => {
    const navigate = useNavigate();
    return (
        <Wrapper 
            direction="row" 
            spacing={"40px"}
            sx={{
                alignItems: "flex-start",
                justifyContent: "space-between"
            }}>

            <Title>{title}</Title>
            <Stack direction="row" gap={'40px'} style={{ width: 'calc(100% - 160px)'}}>
                {
                    cards?.map((card, index) => (
                        <Card 
                            key={index} 
                            onClick={() => navigate(card.to)}
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
