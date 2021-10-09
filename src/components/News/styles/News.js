import styled from "styled-components/macro";
import { BsArrowRight } from "react-icons/bs"
export const Container = styled.div`
    height: 1145px;
    max-width: 1920px;
    padding-bottom: 50px;
    background-image: url("images/news.png") ;
    background-size: cover;
    background-repeat: no-repeat;
    background-position:center ;
    @media screen and (max-width:1292px){
        height: auto;
    }
`;
export const TextContainer = styled.div`
    color: ${pros => pros.theme.colors.black};
    text-align: center;
    height: 500px;
    display: flex;
    padding: 0 20%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 992px){
        padding: 0 5%;
    }
`;

export const BrandsBox = styled.div`
    height: auto;
    max-width: 1920px;
    background-color: ${pros => pros.theme.colors.black};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 2px;
    border-top: 3px solid ${pros => pros.theme.colors.black};
    border-bottom: 3px solid ${pros => pros.theme.colors.black};
    @media screen and (max-width: 992px){
        grid-template-columns: 1fr 1fr  1fr 1fr;

    }
    @media screen and (max-width: 692px ){
            grid-template-columns: 1fr;
            grid-gap: 30px;
            padding: 50px;
            background-color:transparent;

    }
`;
export const Main = styled.div`
    height: 100%;
    max-width: 100%;
    background-color: ${pros => pros.theme.colors.lightOrange};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    @media screen and (max-width: 992px){
        display: none;
    }
    @media screen and (max-width: 672px ){
            min-height: 480px;

    }
`;

export const ArrowBox = styled(BsArrowRight)`
    height: 150px;
    width: 150px;
    border: 10px solid ${pros => pros.theme.colors.black};
    background-color: ${pros => pros.theme.colors.white};
    font-size: 100px;
    font-weight: bold;
    display: flex;
    padding: 0;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`;
export const Coin = styled.img`
    position: absolute;
    bottom: -85px;
    width: 170px;
    right: -30px;
    z-index: 10;
    @media screen and (max-width: 1200px ){
        width: 110px;
        right: -30px;
        top: -55px;
    }
`;