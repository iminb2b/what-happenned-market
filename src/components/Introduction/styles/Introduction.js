import styled from "styled-components/macro";


export const Container = styled.div`
    height: 577px;
    max-width: 1920px;
    background-image: url("./images/-e-introduction_bg.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and ( max-width: 900px){
        max-height: 577px ;
        height: auto;
        

    }
`;
export const TextContainer = styled.div`
    width: 52%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    padding: 0 150px;
    box-sizing: border-box;
    @media screen and ( max-width: 1292px){
        width: 100%;
        padding: 50px 50px;

    }
   
`;
