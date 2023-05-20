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
  ImageShow,
  LikeStop,
} from "./styles";
import Like from "../common/Like";
import StateTag from "../common/StateTag";
import { commonAxios } from "../../utils/commonAxios";
import { getCookie } from "../../utils/getCookie";
import { useState } from "react";

function Card({ data, onClick, islike, setIslike }) {
  const [error, setError] = useState(false);
  const handleLikeClick = (event) => {
    event.stopPropagation(); // 클릭 이벤트 전파 중지
  };

  const handleCardClick = () => {
    onClick();
  };

  const handleLike = (e) => {
    setIslike(true);
    commonAxios
      .post(`/post/${data.id}/like`, null, {
        headers: {
          Authorization: `Bearer ${getCookie("access_token")}`,
        },
      })
      .catch((err) => {
        alert(err.response.data.detail);
        setError(true);
        console.error(err);
      });
  };

  const handleDislike = (e) => {
    setIslike(false);
    commonAxios
      .delete(`/post/${data.id}/like`, {
        headers: {
          Authorization: `Bearer ${getCookie("access_token")}`,
        },
      })
      .catch((err) => {
        setError(true);
        alert(err.response.data.detail);
        console.error(err);
      });
  };

  return (
    <CardContainer id={"card " + data.id} onClick={handleCardClick}>
      <ImgContainer>
        <ImageShow src={data.photo} alt="photo" />
      </ImgContainer>
      <ContentContainer>
        <PostTitleAndLikeContainer>
          <PostTitleContainer>{data.title}</PostTitleContainer>
          <LikeStop onClick={handleLikeClick}>
            <Like
              liked={islike}
              setting={setIslike}
              error={error}
              count={data.like_count}
              onClickLike={handleLike}
              onClickDislike={handleDislike}
            ></Like>
          </LikeStop>
          {/* <Like
            liked={data.islike}
            count={data.like_count}
            onClickLike={handleLike}
            onClickDislike={handleDislike}
          ></Like> */}
        </PostTitleAndLikeContainer>
        <PostAuthorContainer>{data.nickname}</PostAuthorContainer>
        <PostDateContainer>
          작성일 : {data.created_at.substr(0, 10)}
        </PostDateContainer>
        <StateAndPriceContainer>
          <StateTag className={data.status} text={data.status}></StateTag>
          <PriceTextContainer>{data.price}원</PriceTextContainer>
        </StateAndPriceContainer>
      </ContentContainer>
    </CardContainer>
  );
}

export default Card;
