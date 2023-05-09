import Form from "../common/Form";
import {
  InputCategoryContainer,
  InputForm,
  InputPhotoContainer,
  InputPhotoIcon,
  InputPrice,
  InputPriceContainer,
  InputTitleContainer,
  LabelInputContainer,
  PriceContainer,
  PriceText,
  SaveButtonContainer,
  StatesContainer,
  TextArea,
  TextAreaContainer,
  UploadPhotoContainer,
  UploadedPhotoInfoContainer,
} from "./styles";
import Button from "../common/PostButton";
import StateTag from "../common/StateTag";
import PhotoIcon from "../../assets/image.svg";

function Post() {
  return (
    <Form
      children={
        <InputForm>
          <InputTitleContainer placeholder="글의 제목을 작성해주세요." />
          <InputCategoryContainer>
            <Button text="대여원해요" />
            <Button text="대여원해요" />
            <Button text="대여원해요" />
          </InputCategoryContainer>
          <InputPriceContainer>
            <PriceText> 희망 가격 </PriceText>
            <PriceContainer>
              <InputPrice></InputPrice>
              <p>원</p>
            </PriceContainer>
          </InputPriceContainer>
          <StatesContainer>
            <StateTag text="거래가능" />
            <StateTag text="거래 중" />
            <StateTag text="거래완료" />
          </StatesContainer>
          <UploadPhotoContainer>
            <LabelInputContainer htmlFor="uploadPhoto">
              <InputPhotoIcon src={PhotoIcon} alt="image" />
            </LabelInputContainer>
            <InputPhotoContainer
              id="uploadPhoto"
              type="file"
              name="uploadPhoto"
              accept="image/*"
            />
            <UploadedPhotoInfoContainer>
              선택된 파일 없음
            </UploadedPhotoInfoContainer>
          </UploadPhotoContainer>
          <TextAreaContainer>
            <TextArea placeholder="글의 내용을 작성해주세요." />
          </TextAreaContainer>
          <SaveButtonContainer>
            <Button text="저장하기" />
          </SaveButtonContainer>
        </InputForm>
      }
    />
  );
}

export default Post;
