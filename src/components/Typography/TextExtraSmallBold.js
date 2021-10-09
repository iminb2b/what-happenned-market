import React from 'react'
import styled from 'styled-components'
function TextExtraSmallBold({ children }) {
    return (
        <Container>
            {children}
        </Container>
    )
}
const Container = styled.div`
    ${pros => pros.theme.textExtraSmallBold};

    @media screen and (max-width: 1292px){
        ${pros => pros.theme.textExtraSmallBold};

    }
    @media screen and (max-width: 692px){
        font-size: 14px;
    }
`;
export default TextExtraSmallBold
