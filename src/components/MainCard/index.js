import { 
    CardContainer,
    Img,
    PostTitleContainer,
    PostAuthorContainer,
    Author,
    Nickname,
    StatusContainer,
    CreatedAt,
    Like,
    LikePriceContainer,
    Price
} from "./styles"
import StateTag from "../common/StateTag";
import FillLikeIcon from "../../assets/fill_like.svg";
import NotFillLikeIcon from "../../assets/not_fill_like.svg";
import { useState } from "react";

function MainCard ({data}) {
    const [isLiked, setIsLiked] = useState(false)
    const handleLikeClick = () => {
        setIsLiked(!isLiked);
      };

    const statusText = (status) => {
        if (status === "possible") return "거래가능";
        else if (status === "progress") return "거래 중";
        else if (status === "done") return "거래 완료";
      };

    return (
        <CardContainer>
            <Img src={data.photo} alt="photo"/>
            <PostTitleContainer>{data.title}</PostTitleContainer>
            <PostAuthorContainer>
                <Author>작성자</Author>
                <Nickname>{data.nickname}</Nickname>
            </PostAuthorContainer>
            <StatusContainer>
                <CreatedAt>{data.created_at.split("T")[0]}</CreatedAt>
                <StateTag
                    className={data.status}
                    text={statusText(data.status)}
                ></StateTag>
            </StatusContainer>
            <LikePriceContainer>
                {isLiked ? 
                    <Like src={FillLikeIcon} onClick={handleLikeClick}/> : 
                    <Like src={NotFillLikeIcon} onClick={handleLikeClick}/>
                }
                <Price>{data.price + '원'}</Price>
            </LikePriceContainer>

        </CardContainer>
    )
}

export default MainCard;