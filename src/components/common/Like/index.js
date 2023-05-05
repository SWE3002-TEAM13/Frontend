import { LikeContainer, LikeNumber, LikeIconContainer } from "./styles";
import FillLikeIcon from "../../../assets/fill_like.svg";
import NotFillLikeIcon from "../../../assets/not_fill_like.svg";
import { useState } from "react";

function Like() {
  const [imageSrc, setImageSrc] = useState(NotFillLikeIcon);
  const [isClicked, setIsClicked] = useState(false); // 클릭 여부 관리
  const handleClick = () => {
    if (isClicked) {
      setImageSrc(NotFillLikeIcon);
      setIsClicked(false);
    } else {
      setImageSrc(FillLikeIcon);
      setIsClicked(true);
    }
  };

  return (
    <LikeContainer>
      <LikeNumber>3</LikeNumber>
      <LikeIconContainer
        src={imageSrc}
        onClick={handleClick}
        alt="like"
      ></LikeIconContainer>
    </LikeContainer>
  );
}

export default Like;
