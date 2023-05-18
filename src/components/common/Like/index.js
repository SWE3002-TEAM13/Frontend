import { LikeContainer, LikeNumber, LikeIconContainer } from "./styles";
import FillLikeIcon from "../../../assets/fill_like.svg";
import NotFillLikeIcon from "../../../assets/not_fill_like.svg";
import { useState } from "react";

function Like({ liked, ...props }) {
  const [isLiked, setIsLiked] = useState(liked); // 클릭 여부 관리

  const handleClick = () => {
    setIsLiked(!isLiked);
  };
  return (
    <LikeContainer>
      <LikeNumber>{props.count}</LikeNumber>
      <LikeIconContainer
        src={isLiked ? FillLikeIcon : NotFillLikeIcon}
        onClick={() => {
          handleClick();
          if (isLiked) {
            props.onClickDislike();
          } else {
            props.onClickLike();
          }
        }}
        alt="like"
      ></LikeIconContainer>
    </LikeContainer>
  );
}

export default Like;
