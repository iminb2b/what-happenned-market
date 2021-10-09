import React from 'react'
import Button from '../Button'
import { ArrowBox, BrandsBox, Coin, Container, Main, TextContainer } from './styles/News'
import { BrandProduct } from "../../data/BrandProduct"
import SingleProduct from './SingleProduct'
import TextLargeBold from "../Typography/TextLargeBold"
import TextKoreanSmallRegular from "../Typography/TextKoreanSmallRegular"
function News() {
    return (
        <Container>
            <TextContainer>
                <TextLargeBold> HAPPENDED'S ISSUE</TextLargeBold>
                <TextKoreanSmallRegular>모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                    다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</TextKoreanSmallRegular>
                <Button />
            </TextContainer>
            <BrandsBox>
                <Main>
                    <TextLargeBold>WHPN<br /> ISSUE </TextLargeBold>
                    <ArrowBox></ArrowBox>
                    <Coin src="./images/coin.png" />
                </Main>
                {BrandProduct.map(product => <SingleProduct key={product.name} product={product} />)}
            </BrandsBox>
        </Container>
    )
}

export default News
