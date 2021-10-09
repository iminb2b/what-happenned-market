import React from 'react'
import { Container, ItalicText, Logo, Icon, BottomLine, Button, Box } from './styles/MainBanner'
function MainBanner() {
    return (
        <Container>
            <ItalicText>LAUNCHING OPEN EVENT!</ItalicText>
            <Logo src="./images/logo.png" />
            <BottomLine>
                <Button>LOREM IPSUM</Button>
                <Icon></Icon>
                <Box>MARKET  <br />LAUNCHING</Box>
                <Icon></Icon>
                <Button>LOREM IPSUM</Button>

            </BottomLine>
        </Container>
    )
}

export default MainBanner
