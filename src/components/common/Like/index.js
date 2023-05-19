import { LikeContainer, LikeNumber, LikeIconContainer } from "./styles";
import FillLikeIcon from "../../../assets/fill_like.svg";
import NotFillLikeIcon from "../../../assets/not_fill_like.svg";
import { useState } from "react";
import { getCookie } from "../../../utils/getCookie";

function Like({ liked, ...props }) {
  const [isLiked, setIsLiked] = useState(liked); // 클릭 여부 관리

  //   console.log(">>> ", isLiked);

  return (
    <LikeContainer>
      <LikeNumber>{props.count}</LikeNumber>
      <LikeIconContainer
        src={!props.error && liked ? FillLikeIcon : NotFillLikeIcon}
        onClick={() => {
          if (!props.error && getCookie("access_token") != null) {
            if (liked) {
              props.onClickDislike();
            } else {
              props.onClickLike();
            }
          }
        }}
        alt="like"
      ></LikeIconContainer>
    </LikeContainer>
  );
}

export default Like;
