import { StyledButton, ButtonContainer } from "./styles";

function Button(props) {
  return (
    <StyledButton>
<<<<<<< HEAD
      <ButtonContainer
        type={props.type}
        id={props.id}
        value={props.value}
        onClick={props.onClick}
        className={props.className}
      >
        {props.text}
      </ButtonContainer>
=======
      <ButtonContainer>{props.text}</ButtonContainer>
>>>>>>> processing
    </StyledButton>
  );
}

export default Button;
