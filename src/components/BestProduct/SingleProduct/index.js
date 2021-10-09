import { Button, Container, Id, Image, Title, GO, Text } from './styles/SingleProduct'

function SingleProduct({ product }) {
    return (
        <Container>
            <Image src={product.image} >
            </Image>
            <Title src="./images/-e-Producticon_bg.png">
                <Id>{product.id}</Id>
            </Title>
            <Button>
                <Text>How to create moblie-optimzed</Text>
                <GO>GO</GO>
            </Button>

        </Container>
    )
}

export default SingleProduct
