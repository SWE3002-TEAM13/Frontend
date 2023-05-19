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
} from "./styles";
import Like from "../common/Like";
import StateTag from "../common/StateTag";
import { commonAxios } from "../../utils/commonAxios";
import { getCookie } from "../../utils/getCookie";

function Card({ data }) {
  const handleLike = (e) => {
    commonAxios
      .post(
        `/post/${data.id}/like`,
        {
          id: data.id,
        },
        {
          headers: {
            Authorization: `Bearer ${getCookie("access_token")}`,
          },
        }
      )
      .catch((err) => {
        console.error(err);
      });
  };
  console.log(data.islike);

  const handleDislike = (e) => {
    commonAxios
      .delete(
        `/post/${data.id}/like`,
        {
          id: data.id,
        },
        {
          headers: {
            Authorization: `Bearer ${getCookie("access_token")}`,
          },
        }
      )
      .catch((err) => {
        alert("로그인해주세요.");
        console.error(err);
      });
  };

  return (
    <CardContainer id={"card " + data.id}>
      <ImgContainer>
        <ImageShow src={data.photo} alt="photo" />
      </ImgContainer>
      <ContentContainer>
        <PostTitleAndLikeContainer>
          <PostTitleContainer>{data.title}</PostTitleContainer>
          <Like
            liked={data.islike}
            count={data.like_count}
            onClickLike={handleLike}
            onClickDislike={handleDislike}
          ></Like>
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
