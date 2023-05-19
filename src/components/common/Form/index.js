import { FormContainer } from "./styles";

function Form(props) {
  return (
    <FormContainer action={props.action} onSubmit={props.onSubmit}>
      {props.children}
    </FormContainer>
  );
}

export default Form;
