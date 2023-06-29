import styled from "styled-components";
import { colors } from "../../constants/Colors/Theme";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${colors.white};
  border-radius: 16px;
  box-shadow: 0px 1px 2px 0px rgba(64, 48, 96, 0.16);
  padding: 16px;
`;

export const PostTopSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Line = styled.hr`
  height: 1px;
  background-color: ${colors.boxShadow};
  border: none;
`;
export const ImageContainer = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const MoreSection = styled.div`
  display: flex;
`;
export const PostParagraph = styled.p``;
