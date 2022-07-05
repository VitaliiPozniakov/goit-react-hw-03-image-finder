import styled from "@emotion/styled";
import { AiFillCloseCircle } from "react-icons/ai";

export const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.8);
z-index: 1200;
`;

export const Content = styled.div`
max-width: calc(100vw - 48px);
max-height: calc(100vh - 24px);
`;

export const IconClose = styled(AiFillCloseCircle)`
position: absolute;
top: 0;
right: 0;
width: 32px;
height:  32px;
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover, &:focus{
    color: black;
}
`;