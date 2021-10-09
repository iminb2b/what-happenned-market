import styled from "styled-components/macro";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa"
export const Container = styled.div`
    height: 80px;
    max-width: 1920px;
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.black};
    position: fixed;
    width: 100%;
    z-index: 100;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
    @media screen and (max-width: 1200px){
        padding: 0 30px;
    }
`;
export const Logo = styled.img`
    margin-right: auto;
    cursor: pointer;
`;
export const RightContainer = styled.div`
    color: ${props => props.theme.colors.white};
    display: flex;
    @media screen and (max-width: 900px){
        display: none;
    }
`;
export const RightContainerSmall = styled.div`
    color: ${props => props.theme.colors.white};
    display: flex;
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: 1000;
    top: ${({ show }) => show ? "0" : "-100%"};
    transition: all ease 0.5s;
    flex-direction: column;
    padding: 30px 50px;
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.black};
    @media screen and (max-width: 900px){
    }
`;
export const LinksContainer = styled.ul`
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
    align-items: center;
    color: ${props => props.theme.colors.white};
`;
export const LinksContainerSmall = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
    align-items: center;
    color: ${props => props.theme.colors.white};
`;
export const LinkBox = styled.li`
`;
export const LinkBoxSmall = styled.li`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;


`;
export const Link = styled.a`
    color: white;
    text-decoration: none;
    ${props => props.theme.textExtraSmallRegular};
    margin-right: 20px;
    cursor: pointer;
    &:hover{
        color: ${props => props.theme.colors.orange}; ;
    }
`;
export const Icon = styled.span`
    margin-right: 20px;
    user-select: none;
`;
export const Times = styled(FaTimes)`
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    font-size: larger;

`;
export const Hamburger = styled(GiHamburgerMenu)`
    color: white;
    font-size: larger;
    cursor: pointer;
    @media screen and (min-width: 901px){
        display: none;
    }


`;