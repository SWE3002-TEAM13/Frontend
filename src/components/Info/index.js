import Form from "../common/Form";
import Like from "../common/Like";
import {
  NavigationContainer,
  InfoContainer,
  PhotoContainer,
  ConetentsContainer,
  InfoTitleAndLikeContainer,
  InfoTitleContainer,
  NavigationBack,
  OtherInfoContainer,
  InfoAuthorContainer,
  InfoDateContainer,
  InfoStateAndPriceContainer,
  InfoPriceTextContainer,
  OtherTextContainer,
  InfoContentContainer,
  EditIconContainer,
  OtherContentContainer,
  DeleteIconContainer,
  ChatButtonContainer,
} from "./styles";
import Back from "../../assets/arrow.svg";
import StateTag from "../common/StateTag";
import EditIcon from "../../assets/edit.svg";
import DeleteIcon from "../../assets/delete.svg";
import ChatButton from "../common/ChatButton";

function Info() {
  return (
    <Form
      children={
        <>
          <NavigationContainer>
            <NavigationBack src={Back} alt="back" />
          </NavigationContainer>
          <InfoContainer>
            <InfoTitleAndLikeContainer>
              <InfoTitleContainer>제목입니다</InfoTitleContainer>
              <Like></Like>
            </InfoTitleAndLikeContainer>
            <OtherInfoContainer>
              <OtherTextContainer>
                <InfoAuthorContainer>작성자입니다</InfoAuthorContainer>
                <>|</>
                <InfoDateContainer>작성일 : 2020-12-32</InfoDateContainer>
              </OtherTextContainer>
              <InfoStateAndPriceContainer>
                <StateTag></StateTag>
                <InfoPriceTextContainer>1000원</InfoPriceTextContainer>
              </InfoStateAndPriceContainer>
            </OtherInfoContainer>
          </InfoContainer>
          <PhotoContainer></PhotoContainer>
          <ConetentsContainer>
            <InfoContentContainer>글 내용입니다</InfoContentContainer>
            <OtherContentContainer>
              <EditIconContainer src={EditIcon} alt="edit" />
              <DeleteIconContainer src={DeleteIcon} alt="delete" />
            </OtherContentContainer>
            <ChatButtonContainer>
              <ChatButton></ChatButton>
            </ChatButtonContainer>
          </ConetentsContainer>
        </>
      }
    ></Form>
  );
}

export default Info;
