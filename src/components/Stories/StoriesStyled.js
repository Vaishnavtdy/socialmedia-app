import styled from "styled-components";
import { colors, fontSize, fonts } from "../../constants/Colors/Theme";

export const StoryContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Story = styled.div`
  display: flex;
  gap: 30px;
  margin: 0 10px;
  overflow-x: hidden;
`;

export const StoryGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  span{
    color: ${colors.hdblack};
    font-size: ${fontSize.xxs};
    text-align: center;
    font-style: normal;
    font-weight: ${fonts.fontweight2};
    text-wrap: nowrap;
  }
`;
