import { FormContainer } from "./styles";

function Form(props) {
  return (
    <FormContainer onSubmit={props.onSubmit}>{props.children}</FormContainer>
  );
}

export default Form;
