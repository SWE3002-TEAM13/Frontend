import { StyledButton, ButtonContainer } from "./styles";

function Button(props) {
  return (
    <StyledButton>
      <ButtonContainer
        type={props.type}
        id={props.id}
        value={props.value}
        onClick={props.onClick}
        className={props.className}
      >
        {props.text}
      </ButtonContainer>
    </StyledButton>
  );
}

export default Button;
