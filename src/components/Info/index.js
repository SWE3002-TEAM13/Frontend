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
import BlockIcon from "../../assets/block.svg";
import ReportIcon from "../../assets/report.svg";
import ChatButton from "../common/ChatButton";
import { Link, useNavigate } from "react-router-dom";
import { commonAxios } from "../../utils/commonAxios";
import { getCookie } from "../../utils/getCookie";
import { useEffect, useState } from "react";

function Info({ data, islike, setIslike }) {
  let date = data.created_at + "";
  const movePage = useNavigate();
  const [userInfo, setUserInfo] = useState(); // 나중에 들어올 로그인한 유저 아이디 값
  const [error, setError] = useState(false);
  console.log("!!!", islike);

  //   본인 아이디
  console.log(getCookie("access_token"));

  useEffect(() => {
    commonAxios
      .get(`/user/me`, {
        headers: {
          Authorization: `Bearer ${getCookie("access_token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setUserInfo(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert(err.response.data.detail);
      });
  }, []);
  console.log(error);

  useEffect(() => {}, [error]);

  const goBack = () => {
    movePage(`/${data.type}`);
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

  const handleClickDeleteButton = (e) => {
    commonAxios
      .delete(`/post/${data.id}`, {
        headers: {
          Authorization: `Bearer ${getCookie("access_token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        alert("해당 게시물을 삭제하였습니다.");
      })
      .catch((err) => {
        console.error(err);
        alert(err.response.data.detail);
      });

    goBack();
  };

  const handleClickBlockButton = (e) => {
    commonAxios
      .post(`/user/block/${data.author_id}`, null, {
        headers: {
          Authorization: `Bearer ${getCookie("access_token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        alert("해당 게시물의 작성자를 차단하였습니다.");
      })
      .catch((err) => {
        console.error(err);
        alert(err.response.data.detail);
      });
  };

  const handleClickReportButton = (e) => {
    commonAxios
      .post(`/user/report/${data.author_id}`, null, {
        headers: {
          Authorization: `Bearer ${getCookie("access_token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        alert("해당 게시물을 신고하였습니다.");
      })
      .catch((err) => {
        console.error(err);
        alert(err.response.data.detail);
      });
  };

  const handleClickChatButton = (e) => {
    commonAxios
      .post(`/chat/${data.author_id}`, null, {
        headers: {
          Authorization: `Bearer ${getCookie("access_token")}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
        alert(err.response.data.detail);
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
                liked={islike}
                setting={setIslike}
                error={error}
                count={data.like_count}
                onClickLike={handleLike}
                onClickDislike={handleDislike}
              ></Like>
            </InfoTitleAndLikeContainer>
            <OtherInfoContainer>
              <OtherTextContainer>
                <Link to={`/profile/${data.author_id}`}>
                  <InfoAuthorContainer type="button">
                    {data.nickname}
                  </InfoAuthorContainer>
                </Link>
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
            {getCookie("access_token") ? (
              <OtherContentContainer>
                {data.author_id === userInfo?.id ? (
                  <>
                    <Link to={`/edit/${data.id}`}>
                      <EditIconContainer src={EditIcon} alt="edit" />
                    </Link>
                    <IconBtn type="button" onClick={handleClickDeleteButton}>
                      <DeleteIconContainer src={DeleteIcon} alt="delete" />
                    </IconBtn>
                  </>
                ) : (
                  <>
                    <IconBtn type="button" onClick={handleClickBlockButton}>
                      <EditIconContainer src={BlockIcon} alt="block" />
                    </IconBtn>
                    <IconBtn type="button" onClick={handleClickReportButton}>
                      <DeleteIconContainer src={ReportIcon} alt="report" />
                    </IconBtn>
                  </>
                )}
              </OtherContentContainer>
            ) : (
              <></>
            )}

            <ChatButtonContainer>
              <Link to={"/chat"}>
                <ChatButton onClick={handleClickChatButton}></ChatButton>
              </Link>
            </ChatButtonContainer>
          </ConetentsContainer>
        </>
      }
    ></Form>
  );
}

export default Info;
