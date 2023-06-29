import styled from "styled-components";
import { colors, fontSize, fonts } from "../../../constants/Colors/Theme";

export const UserEngagementContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const IconGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  span {
    color: ${colors.hdblack};
    font-size: ${fontSize.small};
    font-family: Sora;
    font-style: normal;
    font-weight: ${fonts.fontweight4};
    line-height: normal;
  }
`;
