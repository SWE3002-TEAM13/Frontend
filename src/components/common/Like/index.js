import { LikeContainer, LikeNumber, LikeIconContainer } from "./styles";
import FillLikeIcon from "../../../assets/fill_like.svg";
import NotFillLikeIcon from "../../../assets/not_fill_like.svg";
import { useState } from "react";
import { getCookie } from "../../../utils/getCookie";

function Like({ liked, ...props }) {
  const [isLiked, setIsLiked] = useState(liked); // 클릭 여부 관리

  const handleClick = () => {
    setIsLiked(!isLiked);
  };
  console.log(props.error);

  return (
    <LikeContainer>
      <LikeNumber>{props.count}</LikeNumber>
      <LikeIconContainer
        src={!props.error && isLiked ? FillLikeIcon : NotFillLikeIcon}
        onClick={() => {
          if (props.error == false && getCookie("access_token") != null) {
            if (isLiked) {
              props.onClickDislike();
            } else {
              props.onClickLike();
            }
            handleClick();
          }
        }}
        alt="like"
      ></LikeIconContainer>
    </LikeContainer>
  );
}

export default Like;
