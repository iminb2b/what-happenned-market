import React from 'react'
import { BottomContainer, Container, TextContainer } from './styles/BestProduct'
import { BestProducts } from '../../data/BestProducts'
import SingleProduct from './SingleProduct'
import TextSmallRegular from '../Typography/TextSmallRegular'
import TextLargeBold from '../Typography/TextLargeBold'
function BestProduct() {
    return (
        <Container>
            <TextContainer>
                <TextLargeBold> BEST PRODUCT</TextLargeBold>
                <TextSmallRegular> How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos Can be trimmed. Take the first</TextSmallRegular>
            </TextContainer>
            <BottomContainer>
                {BestProducts.map(product => <SingleProduct key={product.id} product={product} />)}
            </BottomContainer>
        </Container>
    )
}

export default BestProduct
