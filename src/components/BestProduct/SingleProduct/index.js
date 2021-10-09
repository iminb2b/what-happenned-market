import TextSmallBold from '../../Typography/TextSmallBold'
import { Button, Container, Id, Image, Title, GO } from './styles/SingleProduct'

function SingleProduct({ product }) {
    return (
        <Container>
            <Image src={product.image} >
            </Image>
            <Title src="./images/-e-Producticon_bg.png">
                <Id>{product.id}</Id>
            </Title>
            <Button>
                <TextSmallBold>How to create moblie-optimzed</TextSmallBold>
                <GO>GO</GO>
            </Button>

        </Container>
    )
}

export default SingleProduct
