import styled from "styled-components/macro";
import { GiDiamonds } from "react-icons/gi"
import { FaTimes } from "react-icons/fa"
import { BsArrowRight } from "react-icons/bs"
export const Container = styled.div`
    height: 1500px;
    max-width: 1920px;
    background-image: url("./images/video.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
   
    @media screen and (max-width:1292px){
        height: auto;
        background-size: contain;

    }
    @media screen and (max-width:692px){
        background-image: none;
    }
`;

export const TextContainer = styled.div`
    color: ${pros => pros.theme.colors.black};
    text-align: center;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20%;
    justify-content: center;
    @media screen and (max-width:1292px){
        padding: 0 5%;

    }
`;

export const VideoContainer = styled.div`
    width: 65%;
    border: 3px solid ${pros => pros.theme.colors.black};
    background-color: ${pros => pros.theme.colors.black};

    @media screen and (max-width:692px){
        width: 100%;
    }
`;
export const HeaderContainer = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    color: ${pros => pros.theme.colors.white};
    padding: 0;
`;
export const Icon = styled(GiDiamonds)`
    font-size: 25px;
    margin: 0 20px;
`;
export const Title = styled.div`
    ${pros => pros.theme.textMediumBold}
    @media screen and (max-width:692px){
            ${pros => pros.theme.textExtraSmallBold}

    }
`;
export const Line = styled.div`
    flex-grow: 1;
    margin: 0 20px;
    display: flex;
    height: 30px;
    flex-direction: column;
    justify-content: space-around;
`;
export const Line1 = styled.div`
    width: 100%;
    height: 3px;
    background-color: white;
`;
export const Times = styled(FaTimes)`
    ${pros => pros.theme.textMediumBold}
    margin: 0 20px;
    @media screen and (max-width:692px){
            ${pros => pros.theme.textExtraSmallBold}

    }
`;
export const LinkContainer = styled.div`
    ${pros => pros.theme.textSmallBold}
    height: 40px;
    box-sizing: border-box;
    border-bottom: 3px solid ${pros => pros.theme.colors.black};
    padding: 0 20px;
    display: flex;
    background-color: ${pros => pros.theme.colors.white};
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width:692px){
            ${pros => pros.theme.textExtraSmallBold}

    }
`;
export const LinkText = styled.div`
    
`;
export const Arrow = styled(BsArrowRight)`
    ${pros => pros.theme.textMediumBold}

`;
export const VideoBox = styled.video`
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
`;