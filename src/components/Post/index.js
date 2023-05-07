import Form from "../common/Form";
import { InputForm, InputTitleContainer, SaveButtonContainer } from "./styles";
import Button from "../common/PostButton";

function Post() {
  return (
    <Form
      children={
        <InputForm>
          <InputTitleContainer placeholder="글의 제목을 작성해주세요." />
          <SaveButtonContainer>
            <Button text="저장하기" />
          </SaveButtonContainer>
        </InputForm>
      }
    />
  );
}

export default Post;
