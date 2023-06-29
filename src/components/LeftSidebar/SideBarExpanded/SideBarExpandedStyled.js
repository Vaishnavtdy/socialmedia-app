import styled from "styled-components";
import { colors, fontSize, fonts } from "../../../constants/Colors/Theme";
import { colorful_bg, pattern } from "../../../assets/images";

export const ExpandedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${colors.white};
  padding-top: 48px;
  background-image: url(${colorful_bg});
  background-repeat: no-repeat;
  background-position: top;
  box-shadow: 1px 0px 10px ${colors.boxShadow};
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h5 {
    font-size: ${fontSize.XLarge};
    font-weight: ${fonts.fontweight4};
    color: ${colors.hdblack};
    margin-top: 16px;
  }
  h6 {
    font-size: ${fontSize.medium};
    font-weight: ${fonts.fontweight2};
    color: ${colors.hdblack};
    margin-top: 2px;
  }
  p {
    font-size: ${fontSize.small};
    margin-top: 8px;
    margin-bottom: 12px;
    color: ${colors.hdblack};
  }
`;

export const BottomSection = styled.div`
  display: flex;
  width: auto;
  margin: 16px 24px;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  /* background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, ${colors.gradient1}, ${colors.gradient1})
      border-box;
  border: 2px solid transparent; */
  border: 1.3px solid ${colors.gradient1};
  border-radius: 16px;
  background: url(${pattern});
  background-position: bottom right;
  background-repeat: no-repeat;
`;
export const Row = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;
export const Line = styled.div`
  border: 1px solid ${colors.boxShadow};
`;
export const Items = styled.div`
  display: flex;
  flex-direction: column;
  text-align: ${(props) => (props.secondary ? "end" : "start")};
  p {
    font-size: ${fontSize.xs};
    margin-bottom: 8px;
  }
  h5 {
    font-size: ${fontSize.medium};
  }
`;
