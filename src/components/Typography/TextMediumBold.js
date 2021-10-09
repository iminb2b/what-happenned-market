import React from 'react'
import styled from 'styled-components'
function TextMediumBold({ children }) {
    return (
        <Container>
            {children}
        </Container>
    )
}
const Container = styled.div`
    ${pros => pros.theme.textMediumBold};

    @media screen and (max-width: 1292px){
        ${pros => pros.theme.textSmallBold};

    }
    @media screen and (max-width: 692px){
        ${pros => pros.theme.textExtraSmallBold};
    }
`;
export default TextMediumBold
