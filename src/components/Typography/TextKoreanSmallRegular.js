import React from 'react'
import styled from 'styled-components'
function TextKoreanSmallRegular({ children }) {
    return (
        <Container>
            {children}
        </Container>
    )
}
const Container = styled.div`
    ${pros => pros.theme.textSmallRegular};
    ${pros => pros.theme.fonts.korean};

    @media screen and (max-width: 1292px){
        ${pros => pros.theme.textExtraSmallRegular};

    }
    @media screen and (max-width: 692px){
        ${pros => pros.theme.textExtraSmallRegular};
    }
`;
export default TextKoreanSmallRegular
