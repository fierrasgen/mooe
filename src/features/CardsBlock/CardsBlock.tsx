import { FC, useCallback, useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import useEmblaCarousel from 'embla-carousel-react';
import { Wrapper, Title, Slider, SliderControl } from './styles';
import { KeyboardArrowRight as KeyboardArrowRightIcon, KeyboardArrowLeft as KeyboardArrowLeftIcon } from '@mui/icons-material';
import { Card } from '../../entities/Card';

interface CardsBlockProps {
    title: string;
    cards: Array<{ name: string, to: string}>;
    withSlider?: boolean;
}

export const CardsBlock: FC<CardsBlockProps> = ({ title, cards, withSlider = true }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' });
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  
    const onPrevButtonClick = useCallback(() => {
      if (!emblaApi) {
        return;
      }
      emblaApi.scrollPrev();
    }, [emblaApi]);
  
    const onNextButtonClick = useCallback(() => {
      if (!emblaApi) {
        return;
      }
      emblaApi.scrollNext();
    }, [emblaApi]);
  
    const onSelect = useCallback(() => {
      setPrevBtnDisabled(!emblaApi?.canScrollPrev());
      setNextBtnDisabled(!emblaApi?.canScrollNext());
    }, [emblaApi])
  
    useEffect(() => {
      if (!emblaApi) {
        return;
      }
  
      onSelect();
      emblaApi.on('reInit', onSelect).on('select', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <Wrapper 
            direction="row" 
            spacing={"40px"}
            sx={{
                alignItems: "flex-start",
                justifyContent: "space-between"
            }}>

            <Title>{title}</Title>
            {withSlider && !prevBtnDisabled && (
                <SliderControl onClick={onPrevButtonClick}><KeyboardArrowLeftIcon /></SliderControl>
            )}
            <Slider className='embla'>
                <div className="embla__viewport" ref={emblaRef}>
                    <Stack direction="row" className='embla__container' style={{ margin: '0 0 -40px -40px' }}>
                        {
                            [...cards, ...cards]?.map((card, index) => (
                                <Card key={index} name={card.name} to={card.to} />
                                )
                            )
                        }
                    </Stack>
                </div>
            </Slider>
            {withSlider && !nextBtnDisabled && (
                <SliderControl $isRight onClick={onNextButtonClick}><KeyboardArrowRightIcon /></SliderControl>  
            )}
        </Wrapper>
    );
};
