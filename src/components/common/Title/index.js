import { StyledTitle, LightGreenText, GreenText } from "./styles";

function Title(props) {
  return (
    <StyledTitle>
      <LightGreenText>{props.text1}</LightGreenText>
      <GreenText>{props.text2}</GreenText>
    </StyledTitle>
  );
}

export default Title;
