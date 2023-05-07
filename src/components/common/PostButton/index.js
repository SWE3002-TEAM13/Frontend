import { StyledButton, ButtonContainer } from "./styles";

function Button(props) {
  return (
    <StyledButton>
      <ButtonContainer>{props.text}</ButtonContainer>
    </StyledButton>
  );
}

export default Button;
