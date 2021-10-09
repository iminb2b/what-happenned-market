import React from 'react'
import SingleProduct from './SingleProduct'
import { Container, GO, Line } from './styles/Products'
import { ProductsInfo } from "../../data/products";
import Button from "../Button";
function Products() {
    return (<>
        <Container>
            {ProductsInfo.map(product => <SingleProduct key={product.image} product={product} />
            )}
        </Container>
        <Line>
            <Button>SEE MORE<GO>GO</GO></Button>
        </Line>
    </>
    )
}

export default Products
