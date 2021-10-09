import React from 'react'
import Button from '../Button'
import { Arrow, Container, HeaderContainer, Icon, Line, Line1, LinkContainer, LinkText, TextContainer, Times, Title, VideoBox, VideoContainer } from './styles/Video'
import TextLargeBold from '../Typography/TextLargeBold'
import TextSmallRegular from '../Typography/TextSmallRegular'
function Video() {
    return (
        <Container>
            <TextContainer>
                <TextLargeBold> HAPPENDED'S ISSUE</TextLargeBold>
                <TextSmallRegular>How to create mobile-optimized videos in minutes. Not a designer,<br />
                    every team makes a lot of videos Can be trimmed. Take the first </TextSmallRegular>
                <Button />
            </TextContainer>
            <VideoContainer>
                <HeaderContainer>
                    <Icon />
                    <Title>WHAT HAPPENDED</Title>
                    <Line>
                        <Line1 />
                        <Line1 />
                    </Line>
                    <Times />
                </HeaderContainer>
                <LinkContainer>
                    <LinkText>WWW.WHPN.COM/BRANDSTORY</LinkText>
                    <Arrow />
                </LinkContainer>
                <VideoBox controls>
                    <source src="./ad.mp4" type="video/mp4" />
                </VideoBox>
            </VideoContainer>
        </Container>
    )
}

export default Video
