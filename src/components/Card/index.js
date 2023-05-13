import {
  CardContainer,
  ImgContainer,
  ContentContainer,
  PostTitleAndLikeContainer,
  PostTitleContainer,
  PostAuthorContainer,
  PostDateContainer,
  StateAndPriceContainer,
  PriceTextContainer,
} from "./styles";
import Like from "../common/Like";
import StateTag from "../common/StateTag";

function Card({ liked }) {
  return (
    <CardContainer>
      <ImgContainer></ImgContainer>
      <ContentContainer>
        <PostTitleAndLikeContainer>
          <PostTitleContainer>제목입니다.</PostTitleContainer>
          <Like liked={liked}></Like>
        </PostTitleAndLikeContainer>
        <PostAuthorContainer>작성자입니다.</PostAuthorContainer>
        <PostDateContainer>작성일 : 2020-33-12</PostDateContainer>
        <StateAndPriceContainer>
          <StateTag></StateTag>
          <PriceTextContainer>1000원</PriceTextContainer>
        </StateAndPriceContainer>
      </ContentContainer>
    </CardContainer>
  );
}

export default Card;
