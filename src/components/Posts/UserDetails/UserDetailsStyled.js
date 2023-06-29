import styled from "styled-components";
import { colors, fontSize, fonts } from "../../../constants/Colors/Theme";

export const UserDetailsContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const UserDetailsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  gap: 4;
  align-items: center;
`;
export const Name = styled.h6`
  font-size: ${fontSize.medium};
  font-style: normal;
  font-weight: ${fonts.fontweight4};
  color: ${colors.hdblack};
`;
export const UserName = styled.span`
  font-size: ${fontSize.xs};
  font-style: normal;
  font-weight: ${fonts.fontweight2};
  color: ${colors.hdgrey};
`;
export const Location = styled.p`
  font-size: ${fontSize.xs};
  font-style: normal;
  font-weight: ${fonts.fontweight4};
  color: ${colors.hdblack};

  strong {
    text-decoration: underline;
  }
`;
