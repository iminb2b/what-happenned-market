import styled from "styled-components/macro";
export const Container = styled.div`
    height: auto;
    width: 100%;
    margin-top: -5px;
    position: relative;
`;
export const Image = styled.div`
    background-image: url(${({ src }) => src ? src : ""});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    padding-top: 100% ;
    height: auto;
    cursor: pointer;
    transition: ease 0.3s;
    
`;
export const Title = styled.div`
    position: absolute;
    top: -45px;
    height: 90px;
    width: 90px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${({ src }) => src ? src : ""});

`;
export const Id = styled.div`
    font-size: 20pt;
    font-weight: 900;
    text-decoration: underline;
`;
export const Text = styled.div`
    ${pros => pros.theme.textSmallBold}
    @media screen and (max-width: 992px){
        ${pros => pros.theme.textExtraSmallBold}
    }
`;
export const GO = styled.div`
    height: 66px;
    min-width: 66px;
    background-color:  ${pros => pros.theme.colors.black};
    ${pros => pros.theme.textSmallBold}
    color: ${pros => pros.theme.colors.white};
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50% ;
`;
export const Button = styled.div`
    position: absolute;
    bottom: -45px;
    height: 90px;
    box-sizing: border-box;
    border: 3px solid  ${pros => pros.theme.colors.black};
    color:  ${pros => pros.theme.colors.black};
    background-color:  ${pros => pros.theme.colors.white};
    left: 10%;
    width: 80%;
    display: flex;
    align-items: center;
    padding: 5%;
    justify-content: space-between;
    cursor: pointer;
    transition: ease 0.3s;
    
    &:hover{
        background-color:  ${pros => pros.theme.colors.black};
        ${Text}{
            color: ${pros => pros.theme.colors.white};
        }
        ${GO}{
            color: ${pros => pros.theme.colors.black};
            background-color: ${pros => pros.theme.colors.white};
        }
    }

`;


