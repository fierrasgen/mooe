import { FC, useState } from 'react';
import { useParams } from 'react-router';
import { Header } from '../../features/Header';
import { Content } from '../styles';
import { FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import { MENU_NAV } from '../../shared/config/menuNav';
import { Card } from '../../entities/Card';
import { Footer } from '../../features/Footer';
import { Filters } from './styles';


export const Catalog: FC = () => {
    const { category } = useParams();
    const [filterCategory, setFilterCategory] = useState();
    const [material, setMaterial] = useState();
    
    return (
        <div>
            <Header />
            <Content>
                <Filters direction={'row'} justifyContent={'flex-end'}>
                    <Stack justifyContent={'flex-end'}>
                        <FormControl>
                            <InputLabel id="category-select-label">Category</InputLabel>
                            <Select
                                labelId={'category-select-label'}
                                value={filterCategory}
                                label="Category"
                                onChange={(e) => setFilterCategory(e.target.value)}
                            >
                                <MenuItem value={'office'}>Office</MenuItem>
                                <MenuItem value={'home'}>Home</MenuItem>
                                <MenuItem value={'garden'}>Garden</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                    <Stack justifyContent={'flex-end'}>
                        <FormControl>
                            <InputLabel id="material-select-label">Material</InputLabel>
                            <Select
                                labelId={'material-select-label'}
                                value={material}
                                label="Material"
                                onChange={(e) => setMaterial(e.target.value)}
                            >
                                <MenuItem value={'metal'}>Metal</MenuItem>
                                <MenuItem value={'papper'}>Paper</MenuItem>
                                <MenuItem value={'glass'}>Glass</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                </Filters>
                <Stack direction="row" flexWrap={'wrap'} style={{ margin: '0 0 -40px -40px' }}>
                    {
                        [...MENU_NAV, ...MENU_NAV]?.map((card, index) => (
                            <Card key={index} name={card.name} to={`${card.to}/${index}`} />
                            )
                        )
                    }
                </Stack>
            </Content>
            <Footer />
        </div>
    );
};
