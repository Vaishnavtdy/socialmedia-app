import styled from "styled-components";
import { colors, fontSize, fonts } from "../../../constants/Colors/Theme";

export const CountContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const CountGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  span {
    color: ${colors.hdgrey};
    font-size: ${fontSize.xs};
    font-family: Sora;
    font-style: normal;
    font-weight: ${fonts.fontweight4};
    line-height: normal;
  }
`;
