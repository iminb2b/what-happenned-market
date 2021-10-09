import React from 'react'
import styled from 'styled-components/macro';

const Button = () => {
    return (
        <Container>
            SEE MORE
            <GO >GO</GO>
        </Container>
    )
}
const GO = styled.div`
    position: absolute;
    top: 0;
    right: -25px;
    color: ${pros => pros.theme.colors.white};
    height: 50px;
    width: 50px;
    background-color:  ${pros => pros.theme.colors.black};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: ease 0.3s ;
    border: 4px solid ${pros => pros.theme.colors.black};
    box-sizing: border-box;
    
`;
const Container = styled.div`
    height: 60px;
    width: 200px;
    padding: 0 30px;
    box-sizing: border-box;
    font-weight: 600;
    border: 3px solid ${pros => pros.theme.colors.black};
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    transition: 0.3s ease;
    background-color: ${pros => pros.theme.colors.white};
    margin-top: 30px;
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
export default Button
