import styled from 'styled-components';

export const ImageWrapper = styled.div`
    flex: 0 0 50%;
    height: calc((100vw - 370px) * 0.38);
    position: relative;
`;

export const Image = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(https://shop.getty.edu/cdn/shop/products/G019AH_1200x.jpg?v=1621057374) no-repeat;
    background-size: cover;
`;
