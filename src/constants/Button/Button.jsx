import React from "react";
import { ButtonContainer } from "./ButtonStyled";

function Button({ text, secondary, small }) {
  return (
    <ButtonContainer secondary={secondary} small={small}>
      {text}
    </ButtonContainer>
  );
}

export default Button;
