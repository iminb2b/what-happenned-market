import styled from "styled-components/macro";
import { AiFillHeart } from "react-icons/ai"
export const Container = styled.div`
    height: auto;
    width: 100%;
    margin-bottom: 20px;
`;
export const Image = styled.div`
    background-image: url(${({ src }) => src ? src : ""});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    padding-top: 100% ;
    margin-bottom: 20px;
    height: auto;
    cursor: pointer;
    transition: ease 0.3s;
    &:hover{
        transform: scale(1.1);
    }
`;

export const Line = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const LikeBox = styled.div`
    display: flex;
    align-items: center;
`;
export const LikeIcon = styled(AiFillHeart)`
    color: #fa7b26;
    cursor: pointer;
    margin-right: 5px;
    ${pros => pros.theme.textExtraSmallRegular}

`;