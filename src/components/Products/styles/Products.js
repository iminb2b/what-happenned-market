import styled from "styled-components/macro";

export const Container = styled.div`

    max-width: 1920px;
    height: auto;
    padding: 150px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    @media screen and ( max-width: 1200px){
        grid-template-columns: 1fr 1fr 1fr;
        padding: 100px 50px;
    }
    @media screen and ( max-width: 900px){
        grid-template-columns: 1fr 1fr;
        padding: 100px 50px;
    }
    @media screen and ( max-width: 692px){
        grid-template-columns: 1fr 1fr ;
        padding: 100px 50px;
    }
`;

export const GO = styled.div`
    position: absolute;
    top: 0;
    right: -25px;
    color: ${pros => pros.theme.colors.white};
    height: 50px;
    width: 50px;
    background-color: ${pros => pros.theme.colors.black};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: ease 0.3s ;
    border: 4px solid ${pros => pros.theme.colors.black};
    box-sizing: border-box;
    
`;
export const Button = styled.div`
    height: 60px;
    padding: 0 30px;
    box-sizing: border-box;
    font-weight: 600;
    border: 3px solid ${pros => pros.theme.colors.black};
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover{
        background-color: ${pros => pros.theme.colors.black};
        color: ${pros => pros.theme.colors.white};
    transform: translateX(30px);

        ${GO}{

            background-color: ${pros => pros.theme.colors.white};
            color: ${pros => pros.theme.colors.black};
            cursor: pointer;
        }

    }
`;
export const Line = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 150px;
`;