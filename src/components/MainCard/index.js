import {
  CardContainer,
  Img,
  PostTitleContainer,
  PostAuthorContainer,
  Author,
  Nickname,
  StatusContainer,
  CreatedAt,
  LikePriceContainer,
  Price,
  LikeStop,
} from "./styles";
import StateTag from "../common/StateTag";
import FillLikeIcon from "../../assets/fill_like.svg";
import NotFillLikeIcon from "../../assets/not_fill_like.svg";
import { useState } from "react";
import { getCookie } from "../../utils/getCookie";
import { commonAxios } from "../../utils/commonAxios";
import Like from "../common/Like";

function MainCard({ data, onClick, islike, setIslike }) {
  const [isLiked, setIsLiked] = useState(false);
  const [error, setError] = useState(false);
  console.log(islike);

  const handleLikeClick = (event) => {
    event.stopPropagation(); // 클릭 이벤트 전파 중지
    // setIsLiked(!isLiked);
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
    <CardContainer onClick={handleCardClick}>
      <Img src={data.photo} alt="photo" />
      <PostTitleContainer>{data.title}</PostTitleContainer>
      <PostAuthorContainer>
        <Author>작성자</Author>
        <Nickname>{data.nickname}</Nickname>
      </PostAuthorContainer>
      <StatusContainer>
        <CreatedAt>{data.created_at.split("T")[0]}</CreatedAt>
        <StateTag className={data.status} text={data.status}></StateTag>
      </StatusContainer>
      <LikePriceContainer>
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

        <Price>{data.price + "원"}</Price>
      </LikePriceContainer>
    </CardContainer>
  );
}

export default MainCard;
