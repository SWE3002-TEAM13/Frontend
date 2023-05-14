import { StateContainer } from "./styles";

<<<<<<< HEAD
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
=======
function StateTag() {
  return <StateContainer>거래 가능</StateContainer>;
>>>>>>> processing
}

export default StateTag;
