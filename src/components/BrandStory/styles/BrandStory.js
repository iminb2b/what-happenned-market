import styled from "styled-components/macro";

export const Container = styled.div`
    max-height: 955px;
    max-width: 1920px;
    background-color: ${pros => pros.theme.colors.blue};
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url("./images/brandstory-bg.png");
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 150px 0;
    @media screen and (max-width: 692px ){
        padding: 50px 0;


    }
`;
export const TextContainer = styled.div`
    color: ${pros => pros.theme.colors.yellow}; ;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 0 20%;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
    @media screen and (max-width: 992px){
        height: 270px;
        padding: 0 5%;
    }
`;

export const Box = styled.div`
    width: 65%;
    border: 5px solid ${pros => pros.theme.colors.black};
    background-color: ${pros => pros.theme.colors.white};
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    @media screen and (max-width: 692px ){
            width: 100%;

    }
`;
export const Border = styled.div`
    height: 24px;
    background-color: ${pros => pros.theme.colors.black};
    margin: -1px;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 0 10px;
    padding-bottom: 5px;
`;
export const Border1 = styled.div`
    height: 2px;
    background-color: ${pros => pros.theme.colors.blue} ;
`;
export const Inside = styled.div`
    min-height: 410px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
    background-color: ${pros => pros.theme.colors.black};
    @media screen and (max-width: 1200px ){
            grid-template-columns: 1fr;
    }
`;
export const BoxLeft = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 410px;
    background-image: url("./images/-e-img.png");
    @media screen and (max-width: 1200px ){
            display: none;


    }
`;
export const BoxRight = styled.div`
    height: 100%;
    background-color: ${pros => pros.theme.colors.white};
    padding: 40px 40px;
    box-sizing: border-box;

`;

