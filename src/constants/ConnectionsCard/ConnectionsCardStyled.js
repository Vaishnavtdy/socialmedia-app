import styled from "styled-components";
import { colors, fontSize, fonts } from "../Colors/Theme";

export const CardContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Time = styled.span`
font-size: ${fontSize.xs};
color: ${colors.hdgrey};

`

export const NameContainer = styled.div`
  display: flex;
  gap: 8px;
  h6 {
    color: ${colors.hdblack};
    font-size: ${fontSize.small};
    font-weight: ${fonts.fontweight4};
  }
  span {
    color: ${colors.hdgrey};
    font-size: ${fontSize.xs};
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  p{
    color: ${colors.hdviolet};
    font-size: ${fontSize.xxs};
  }

  span{
    color: ${colors.hdgrey};
    font-size: ${fontSize.xxs};
  }
`;
