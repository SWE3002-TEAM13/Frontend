import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BannedUser from "../../components/BannedUser/index.js";
import { useNavigate } from "react-router-dom";
import { commonAxios } from "../../utils/commonAxios.js";
import { getCookie } from "../../utils/getCookie.js";
import CardList from "../../components/CardList/index.js";

function MyProfilePage() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  const [blockList, setBlockList] = useState([]);
  const [likeList, setLikeList] = useState([]);
  const [rentList, setRentList] = useState([]);
  const [lendList, setLendList] = useState([]);
  const [shareList, setShareList] = useState([]);
  const [like, setLike] = useState();

  const onClickUnblock = (id) => {
    commonAxios
      .delete(`/user/block/${id}`, {
        headers: {
          Authorization: `Bearer ${getCookie("access_token")}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          alert("차단해제가 완료되었습니다.");
          window.location.reload();
        } else {
          alert("Unblock failed!");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    commonAxios
      .get(`/user/profile/me`, {
        headers: {
          Authorization: `Bearer ${getCookie("access_token")}`,
        },
      })
      .then((res) => {
        setProfile(res.data.profile);
        setBlockList(res.data.blocklist);
        setLikeList(res.data.likelist);
        setRentList(res.data.rentlist);
        setLendList(res.data.lendlist);
        setShareList(res.data.sharelist);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [like]);

  return (
    <Container>
      {profile && profile.nickname && (
        <>
          <ProfileTitleBox>
            <ProfileTitleName>{profile.nickname}</ProfileTitleName>
            <ProfileTitleText>프로필</ProfileTitleText>
          </ProfileTitleBox>
          <ProfileBox>
            <ImgUploadDiv>
              <ImgUpload src={profile.thumbnail} />
            </ImgUploadDiv>
            <ProfileDiv>
              <ProfileName>{profile.nickname}</ProfileName>
              <CampusName>{profile.loc_str}</CampusName>
            </ProfileDiv>
          </ProfileBox>
          <Button width="600px" onClick={() => navigate("/profileedit")}>
            프로필수정
          </Button>
          <BannedUserTitle>유저 차단 목록</BannedUserTitle>
          {blockList.length > 0 ? (
            <BannedUserBox>
              {blockList.map((user, index) => (
                <BannedUser
                  img={user.thumbnail}
                  name={user.nickname}
                  onClickUnblock={() => onClickUnblock(user.id)}
                  key={index}
                  onClick={() => navigate(`/profile/${user.id}`)}
                />
              ))}
            </BannedUserBox>
          ) : (
            ""
          )}
          <LikedTitleBox>
            <Liked>좋아요</Liked>
            <SubTitle>목록</SubTitle>
          </LikedTitleBox>
          {likeList.length > 0 ? (
            <>
              <Gap height={35} />
              <CardList data={likeList} setLike={setLike} />
            </>
          ) : (
            ""
          )}
          <TitleBox>
            <Title>대여원해요</Title>
            <SubTitle>이력</SubTitle>
          </TitleBox>
          {rentList.length > 0 ? (
            <>
              <Gap height={35} />
              <CardList data={rentList} setLike={setLike} />
              <Gap height={32} />
            </>
          ) : (
            ""
          )}
          <TitleBox>
            <Title>대여합니다</Title>
            <SubTitle>이력</SubTitle>
          </TitleBox>
          {lendList.length > 0 ? (
            <>
              <Gap height={35} />
              <CardList data={lendList} setLike={setLike} />
              <Gap height={32} />
            </>
          ) : (
            ""
          )}
          <TitleBox>
            <Title>나눔합시다</Title>
            <SubTitle>이력</SubTitle>
          </TitleBox>
          {shareList.length > 0 ? (
            <>
              <Gap height={35} />
              <CardList data={shareList} />
              <Gap height={32} />
            </>
          ) : (
            ""
          )}
        </>
      )}
    </Container>
  );
}

export default MyProfilePage;

const Container = styled.div`
  margin-top: 84px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

const Gap = styled.div`
  height: ${({ height }) => height}px;
`;

const ProfileTitleBox = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const ProfileTitleName = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: #5b756c;
  margin-right: 10px;
`;

const ProfileTitleText = styled.div`
  font-size: 45px;
  font-weight: bold;
  color: #8dc63f;
`;

const ProfileBox = styled.div`
  width: 600px;
  margin-top: 70px;
  display: flex;
`;

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 62px;
  margin-top: 43px;
`;

const ImgUploadDiv = styled.div`
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  height: 180px;
  width: 180px;
  overflow: hidden;
`;

const ImgUpload = styled.img`
  width: 180px;
  height: 180px;
`;

const ProfileName = styled.div`
  font-size: 40px;
  color: #8dc63f;
  font-weight: bold;
`;

const CampusName = styled.div`
  font-size: 25px;
  color: #808080;
  margin-top: 15px;
`;

const Button = styled.button`
  margin-top: 37px;
  border: none;
  width: 600px;
  height: 50px;
  background: #8dc63f;
  color: white;
  font-size: 23px;
  margin-bottom: 40px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    opacity: 0.8;
  }
`;

const BannedUserTitle = styled.div`
  font-weight: bold;
  font-size: 60px;
  color: #ff6c0f;
  margin-bottom: 35px;
`;

const BannedUserBox = styled.div`
  display: flex;
  width: 950px;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const LikedTitleBox = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: baseline;
  width: 306px;
  justify-content: space-between;
`;

const Liked = styled.div`
  font-weight: bold;
  font-size: 60px;
  color: #8dc63f;
`;

const SubTitle = styled.div`
  font-size: 60px;
  color: black;
`;

const TitleBox = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: baseline;
  width: 420px;
  justify-content: space-between;
`;

const Title = styled.div`
  color: #5b756c;
  font-size: 60px;
  font-weight: bold;
`;
