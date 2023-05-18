import { StyledButton, ButtonContainer } from './styles';

function Button(props) {
  return (
    <StyledButton onClick={props.onClick}>
      <ButtonContainer>{props.text}</ButtonContainer>
    </StyledButton>
  );
}

export default Button;
