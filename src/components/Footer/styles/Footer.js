import styled from "styled-components/macro";

export const Container = styled.div`
    padding:  50px 150px;
    border-top: 1px solid ${pros => pros.theme.colors.gray};
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width:1292px){
        padding: 50px 20px;
    }
    @media screen and (max-width:992px){
        grid-template-columns: 1fr;
    }
`;
export const Left = styled.div`

`;
export const Right = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    @media screen and (max-width:692px){
        grid-template-columns: 1fr 1fr;
    }
`;
export const Column = styled.div`

`;
export const Row = styled.div`
    height: 40px;
    `;
export const Title = styled.div`
    
    ${pros => pros.theme.textExtraSmallBold}
    
    `;
export const Link = styled.div`
    font-family: ${pros => pros.theme.fonts.korean};
    ${pros => pros.theme.textEtraSmallRegular}
    cursor: pointer;
    transition: 0.3s ease;
    &:hover{
        color:  ${pros => pros.theme.colors.orange};
    }
`;
export const BottomLine = styled.div`
    border-top: 2px solid  ${pros => pros.theme.colors.gray};
    padding:  50px 150px;
    font-size: 14px;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width:1292px){
        padding: 50px 20px ;
    }
    @media screen and (max-width:992px){
        flex-direction: column;
    }
`;
export const BottomLeft = styled.div`
    color:  ${pros => pros.theme.colors.gray};
    @media screen and (max-width:992px){
        font-size: 12px;
        width: 100%;
    }
`;
export const BottomRight = styled.div`
    margin-top: 20px;
`;
export const ImageLink = styled.img`
    height: 40px;
    margin-left: 20px;
`;