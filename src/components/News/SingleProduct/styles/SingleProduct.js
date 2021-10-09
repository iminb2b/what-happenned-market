import styled from "styled-components/macro";
export const Container = styled.div`
    height: auto;
    width: 100%;
    margin-top: -5px;
    position: relative;
    background-color: ${pros => pros.theme.colors.black};
    color: ${pros => pros.theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const Hot = styled.img`
    position: absolute;
    top: -33px;
    left: 30px;
    height: 66px;
    display: ${({ hot }) => hot ? "block" : "none"};
    
`;
export const Cmt = styled.img`
    position: absolute;
    bottom: -50px;
    left: -100px;
    display: ${({ cmt }) => cmt ? "block" : "none"};
    @media screen and (max-width: 692px){
        left: 0;
    }
`;

