import { StateContainer } from "./styles";

function StateTag(props) {
  return (
    <StateContainer
      type="button"
      id={props.id}
      className={props.className}
      onClick={props.onClick}
    >
      {props.text}
    </StateContainer>
  );
}

export default StateTag;
