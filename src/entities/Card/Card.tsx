import { FC } from 'react';
import { StyledCard, Image, CardContent } from './styles';

interface CardProps {
    name: string;
    to: string;
}

export const Card: FC<CardProps> = ({ name, to }) => {
    return (
        <StyledCard target={'_blank'} to={to}>
            <CardContent
                sx={{
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Image />
                    <p>{name}</p>
            </CardContent>
        </StyledCard>
    );
};
