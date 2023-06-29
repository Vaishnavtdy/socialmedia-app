import styled from "styled-components";
import { colors } from "../../../constants/Colors/Theme";

export const SideBarMenuContainer = styled.div`
display: flex;
flex-direction: column;
gap: 32px;
background-color: ${colors.white};
width: fit-content;
padding: 48px 24px;
box-shadow: 1px 0px 10px ${colors.boxShadow}; 
z-index: 1;
`