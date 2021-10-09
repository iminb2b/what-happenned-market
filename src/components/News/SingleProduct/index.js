import { Cmt, Container, Hot, Image } from './styles/SingleProduct'
import TextMediumBold from '../../Typography/TextMediumBold'
function SingleProduct({ product }) {
    return (
        <Container>
            <TextMediumBold>{product.name}</TextMediumBold>
            <Image src={product.image} >
            </Image>
            <Hot hot={product.hot} src="./images/hot.png"></Hot>
            <Cmt cmt={product.cmt} src="./images/cmt.png"></Cmt>
        </Container>
    )
}

export default SingleProduct
