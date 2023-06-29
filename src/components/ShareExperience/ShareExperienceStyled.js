import styled from "styled-components";
import { colors } from "../../constants/Colors/Theme";

export const ExpericeContainer = styled.div`
  display: flex;
  background-color: ${colors.white};
  border-radius: 16px;
  box-shadow: 0px 1px 2px 0px rgba(64, 48, 96, 0.16);
  padding: 24px;
  margin-top: 8px;
  align-items: center;
  gap: 16px;
  
  input{
    outline: none;
    border: none;
    width: 100%;
    resize: none;
  }
`;
