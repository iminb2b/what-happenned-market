import React, { useState } from 'react'
import { Container, Logo, RightContainerSmall, LinkBoxSmall, RightContainer, Link, LinksContainer, LinkBox, Icon, LinksContainerSmall, Times, Hamburger } from './styles/Header'

function Header({ props }) {
    const [show, setShow] = useState(false)
    return (<>
        <Container>
            <a href="/">
                <Logo src="./images/-e-logo.png"></Logo>
            </a>
            <Hamburger onClick={() => setShow(true)} />
            <RightContainer>
                <LinksContainer>
                    <LinkBox><Link href="/">INTRODUCTION</Link></LinkBox>
                    <LinkBox><Link href="/">SOLUTION</Link></LinkBox>
                    <LinkBox><Link href="/">RATE PLAN</Link></LinkBox>

                </LinksContainer>
                <Icon>|</Icon>
                <LinksContainer>
                    <LinkBox><Link href="/">LOGIN</Link></LinkBox>
                    <LinkBox><Link href="/">APPLY FOR FREE USE</Link></LinkBox>

                </LinksContainer>
            </RightContainer>

        </Container>
        <RightContainerSmall show={show}>
            <Times onClick={() => setShow(false)} />
            <LinksContainerSmall >
                <LinkBoxSmall><Link onClick={() => setShow(false)} >INTRODUCTION</Link></LinkBoxSmall>
                <LinkBoxSmall><Link onClick={() => setShow(false)} >SOLUTION</Link></LinkBoxSmall>
                <LinkBoxSmall><Link onClick={() => setShow(false)} >RATE PLAN</Link></LinkBoxSmall>
                <LinkBoxSmall><Link onClick={() => setShow(false)} >LOGIN</Link></LinkBoxSmall>
                <LinkBoxSmall><Link onClick={() => setShow(false)} >APPLY FOR FREE USE</Link></LinkBoxSmall>
            </LinksContainerSmall>
        </RightContainerSmall></>
    )
}

export default Header
