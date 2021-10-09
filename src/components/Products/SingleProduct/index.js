import React, { useState } from 'react'
import TextExtraSmallBold from '../../Typography/TextExtraSmallBold';
import TextExtraSmallRegular from '../../Typography/TextExtraSmallRegular';
import { Container, Image, LikeBox, LikeIcon, Line, } from './styles/SingleProduct'

function SingleProduct({ product }) {
    const [like, setLike] = useState(product.likes)
    return (
        <Container>
            <Image src={product.image} >
            </Image>

            <TextExtraSmallBold>{product.name}</TextExtraSmallBold>
            <Line>
                <TextExtraSmallRegular>{product.price}00 won</TextExtraSmallRegular>
                <LikeBox><LikeIcon onClick={() => {
                    let likes = like + 1;
                    setLike(likes);
                }} /><TextExtraSmallRegular>{like}</TextExtraSmallRegular></LikeBox>
            </Line>
        </Container>
    )
}

export default SingleProduct
