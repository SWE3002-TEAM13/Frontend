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
import { useState } from "react";

function Post(props) {
  console.log(props.type);
  const [selectedType, setSelectedType] = useState(props.type);
  const [selectedState, setSelectedState] = useState("possible");

  const handleClickTypeButton = (e) => {
    setSelectedType(e.target.id);
    console.log(selectedType);
  };

  const handleClickStateButton = (e) => {
    setSelectedState(e.target.id);
    console.log(selectedState);
  };

  return (
    <Form
      children={
        <InputForm>
          <InputTitleContainer placeholder="글의 제목을 작성해주세요." />
          <InputCategoryContainer>
            <Button
              type="button"
              text="대여원해요"
              id="rent"
              className={"type" + ("rent" === selectedType ? " active" : "")}
              onClick={handleClickTypeButton}
            />
            <Button
              type="button"
              text="대여합니다"
              id="lend"
              className={"type" + ("lend" === selectedType ? " active" : "")}
              onClick={handleClickTypeButton}
            />
            <Button
              type="button"
              text="나눔합시다"
              id="share"
              className={"type" + ("share" === selectedType ? " active" : "")}
              onClick={handleClickTypeButton}
            />
          </InputCategoryContainer>
          <InputPriceContainer>
            <PriceText> 희망 가격 </PriceText>
            <PriceContainer>
              <InputPrice></InputPrice>
              <p>원</p>
            </PriceContainer>
          </InputPriceContainer>
          <StatesContainer>
            <StateTag
              text="거래가능"
              id="possible"
              className={
                "state" + ("possible" === selectedState ? " active" : "")
              }
              onClick={handleClickStateButton}
            />
            <StateTag
              text="거래 중"
              id="progress"
              className={
                "state" + ("progress" === selectedState ? " active" : "")
              }
              onClick={handleClickStateButton}
            />
            <StateTag
              text="거래완료"
              id="done"
              className={"state" + ("done" === selectedState ? " active" : "")}
              onClick={handleClickStateButton}
            />
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
            <Button type="submit" className="submit basic" text="저장하기" />
          </SaveButtonContainer>
        </InputForm>
      }
    />
  );
}

export default Post;
