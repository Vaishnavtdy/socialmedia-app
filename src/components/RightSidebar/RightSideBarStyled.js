import styled from "styled-components";
import { colors, fontSize, fonts } from "../../constants/Colors/Theme";

export const RightSideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 48px;
  background-color: ${colors.white};
  box-shadow: -1px 0px 2px 0px rgba(64, 48, 96, 0.12);
  height: 100%;
  /* overflow: scroll; */
`;

export const RightSideHeadingContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h5 {
    color: ${colors.hdblack};
    font-size: ${fontSize.large};
    font-weight: ${fonts.fontweight6};
  }

  span {
    color: ${colors.hdgrey};
    font-size: ${fontSize.xs};
    font-weight: ${fonts.fontweight1};
  }
`;
