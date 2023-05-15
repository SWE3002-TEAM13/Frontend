import { StateContainer } from "./styles";

function StateTag(props) {
  const statusText = (status) => {
    if (status === "possible") return "거래가능";
    else if (status === "progress") return "거래 중";
    else if (status === "done") return "거래 완료";
  };
  return (
    <StateContainer
      type="button"
      id={props.id}
      className={props.className}
      onClick={props.onClick}
    >
      {statusText(props.className)}
    </StateContainer>
  );
}

export default StateTag;
