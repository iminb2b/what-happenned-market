import React from 'react'
import styled from 'styled-components'
function TextExtraSmallRegular({ children }) {
    return (
        <Container>
            {children}
        </Container>
    )
}
const Container = styled.div`
    ${pros => pros.theme.textExtraSmallRegular};

    @media screen and (max-width: 1292px){
        ${pros => pros.theme.textExtraSmallRegular};

    }
    @media screen and (max-width: 692px){
        font-size: 14px;

    }
`;
export default TextExtraSmallRegular
