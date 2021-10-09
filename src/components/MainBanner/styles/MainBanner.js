import styled from "styled-components/macro";
import { BsArrowRight } from "react-icons/bs"
export const Container = styled.div`
    height: 1000px;
    width: 100%;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.orange};
    @media screen and (max-width: 692px){
        height: 100vh;
    }
`;
export const Logo = styled.img`
    width: 60%;
    @media screen and (max-width: 692px){
        width: 80%;
    }
`;
export const ItalicText = styled.h1`
    ${props => props.theme.textLargeBold};
    font-style: italic;
    text-align: center;
    margin-top: 50px;
    @media screen and (max-width: 692px){
        font-size: 20px;
        letter-spacing: 2px;
    }
`;
export const BottomLine = styled.div`
    width: 60%;
    display: flex;
    margin-top: 100px;
    justify-content: space-between;
    color: ${props => props.theme.colors.black};
    ${props => props.theme.textSmallBold}
    align-items: center;
    text-align: center;
        margin: 100px 0;

    @media screen and ( max-width: 692px){
        width: 90%;
        margin: 50px 0;
        font-size: 10px;
    }
`;
export const Button = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem ;
    border-radius: 25px;
    border: 3px solid ${pros => pros.theme.black};
    max-width: 40%;
    @media screen and ( max-width: 692px){
        height: 40px;
        border-radius: 20px;
    }
`;
export const Box = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    border-top: 3px solid ${pros => pros.theme.black};
    border-bottom: 3px solid ${pros => pros.theme.black};
`;
export const Icon = styled(BsArrowRight)`
     ${props => props.theme.textLargeBold};
     @media screen and ( max-width: 692px){
        font-size: 20px;
    }
`;