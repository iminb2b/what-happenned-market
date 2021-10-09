import styled from "styled-components/macro";


export const Container = styled.div`
    max-width: 1920px;
    height: 1075px;
    background-image : url("./images/-e-Bes_bg.jpg") ;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 992px){
        height: auto;
        padding-bottom: 150px;
    }
   
`;

export const TextContainer = styled.div`
    justify-content: center;
    color: ${pros => pros.theme.colors.carrot};
    text-align: center;
    height: 365px;
    padding: 0 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 32%;
    @media screen and (max-width:1292px){
        padding: 0 15%;

    }
    @media screen and (max-width:692px){
        padding: 0 5%;

    }
    @media screen and (max-width: 992px){
        height: 270px;
    }
`;

export const BottomContainer = styled.div`
    display: grid;
    padding: 0 150px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0;
    @media screen and (max-width: 1292px){
        padding: 0;
    }
    @media screen and (max-width: 692px){
        grid-template-columns: 1fr;
        padding: 0;
        grid-gap: 100px;
        padding: 0 50px;
    }
`;
