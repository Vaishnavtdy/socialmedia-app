import styled from "styled-components";
import { colors, fontSize, fonts } from "../Colors/Theme";

export const ButtonContainer = styled.button`
  padding: ${(props) => (props.small ? "7px 10px" : "10px 13px")};
  cursor: pointer;
  font-size: ${props => props.small ? `${fontSize.xs}`: `${fontSize.small}`};
  font-weight: ${props => props.small ? `${fonts.fontweight1}` : `${fonts.fontweight4}`};
  /* background: linear-gradient(to right, ${colors.gradient1},${colors.gradient2} );
  border-radius: 10px; */

  background: ${(props) =>
    props.secondary
      ? `linear-gradient(white, white)
      padding-box,
    linear-gradient(to right, ${colors.gradient1}, ${colors.gradient1})
      border-box`
      : `linear-gradient(${colors.gradient1}, ${colors.gradient1})
      padding-box,
    linear-gradient(to right, ${colors.gradient1}, ${colors.gradient1})
      border-box`};
  border: 1px solid transparent;
  border-radius: 10px;
  color: ${(props) =>
    props.secondary ? `${colors.hdblack}` : `${colors.white}`};
`;
