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
  Photo,
  IconBtn,
} from "./styles";
import Back from "../../assets/arrow.svg";
import StateTag from "../common/StateTag";
import EditIcon from "../../assets/edit.svg";
import DeleteIcon from "../../assets/delete.svg";
import ChatButton from "../common/ChatButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Info({ data }) {
  let date = data.created_at + "";
  const movePage = useNavigate();

  const goBack = () => {
    movePage(`/${data.type}`);
  };

  const handleLike = (e) => {
    // eslint-disable-next-line
    axios.post(`${process.env.REACT_APP_API_ENDPOINT}/post/${data.id}/like`, {
      id: data.id,
    });
  };

  const handleDislike = (e) => {
    // eslint-disable-next-line
    axios.delete(`${process.env.REACT_APP_API_ENDPOINT}/post/${data.id}/like`, {
      id: data.id,
    });
  };

  return (
    <Form
      children={
        <>
          <NavigationContainer>
            <IconBtn type="button" onClick={goBack}>
              <NavigationBack src={Back} alt="back" />
            </IconBtn>
          </NavigationContainer>
          <InfoContainer>
            <InfoTitleAndLikeContainer>
              <InfoTitleContainer>{data.title}</InfoTitleContainer>
              <Like
                count={data.like_count}
                onClickLike={handleLike}
                onClickDislike={handleDislike}
              ></Like>
            </InfoTitleAndLikeContainer>
            <OtherInfoContainer>
              <OtherTextContainer>
                <InfoAuthorContainer>{data.nickname}</InfoAuthorContainer>
                <>|</>
                <InfoDateContainer>
                  작성일 : {date.substr(0, 10)}
                </InfoDateContainer>
              </OtherTextContainer>
              <InfoStateAndPriceContainer>
                <StateTag className={data.status} text={data.status}></StateTag>
                <InfoPriceTextContainer>{data.price}원</InfoPriceTextContainer>
              </InfoStateAndPriceContainer>
            </OtherInfoContainer>
          </InfoContainer>
          <PhotoContainer>
            <Photo src={data.photo} alt="photo" />
          </PhotoContainer>
          <ConetentsContainer>
            <InfoContentContainer>{data.content}</InfoContentContainer>
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
