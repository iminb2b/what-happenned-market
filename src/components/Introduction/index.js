import React from 'react'
import TextLargeBold from '../Typography/TextLargeBold'
import TextSmallRegular from '../Typography/TextSmallRegular'
import { Container, TextContainer } from './styles/Introduction'

function Introduction() {
    return (
        <Container>
            <TextContainer>
                <TextLargeBold>WHAT HAPPENED!</TextLargeBold>
                <TextSmallRegular>How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos Can be trimmed. Take the first
                    step to your brand's success. How to create
                    mobile-optimized videos in minutes.</TextSmallRegular>
            </TextContainer>
        </Container>
    )
}

export default Introduction
