import React from 'react'
import styled from 'styled-components'
function TextLargeBold({ children }) {
    return (
        <Container>
            {children}
        </Container>
    )
}
const Container = styled.div`
    ${pros => pros.theme.textLargeBold};

    @media screen and (max-width: 1292px){
        ${pros => pros.theme.textMediumBold};

    }
    @media screen and (max-width: 692px){
        ${pros => pros.theme.textSmallBold};
    }
`;
export default TextLargeBold
