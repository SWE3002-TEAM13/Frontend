import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BannedUser from "../../components/BannedUser/index.js";
import { useNavigate } from "react-router-dom";
import CardList from "../../components/CardList/index.js";

function MyProfilePage() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  const [blockList, setBlockList] = useState([]);
  const [likeList, setLikeList] = useState([]);
  const [rentList, setRentList] = useState([]);
  const [lendList, setLendList] = useState([]);
  const [shareList, setShareList] = useState([]);
  const [accessToken, setAccessToken] = useState();

  const onClickUnblock = (id) => {
    fetch(`http://localhost:8000/user/block/${id}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${accessToken}`
      }
    }).then(async response => {
      if (response.ok) {
        console.log("Unblock successful!");
        const json = await response.json();
        alert('차단해제가 완료되었습니다.');
        window.location.reload();
      } else if (response.status !== 200) {
        alert("Unblock failed!");
      }
    });
  };

  useEffect(() => {
    const access_token = document.cookie.replace(
      /(?:(?:^|.*;\s*)access_token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    setAccessToken(access_token);

    fetch("http://localhost:8000/user/profile/me", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${access_token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setProfile(data.profile);
        setBlockList(data.blocklist);
        setLikeList(data.likelist);
        setRentList(data.rentlist);
        setLendList(data.lendlist);
        setShareList(data.sharelist);
      })
      .catch(error => {
        console.error("Error occurred:", error);
      });
  }, []);

  return (
    <Container>
      {profile && profile.nickname && (
        <>
          <ProfileTitleBox>
            <ProfileTitleName>{profile.nickname}</ProfileTitleName>
            <ProfileTitleText>프로필</ProfileTitleText>
          </ProfileTitleBox>
          <ProfileBox>
            <ImgUploadDiv imgUrl={profile.thumbnail} />
            <ProfileDiv>
              <ProfileName>{profile.nickname}</ProfileName>
              <CampusName>{profile.loc_str}</CampusName>
            </ProfileDiv>
          </ProfileBox>
          <Button
            width="600px"
            onClick={() => navigate("/profileedit")}
          >
            프로필수정
          </Button>
          {blockList.length > 0 ? <>
            <BannedUserTitle>유저 차단 목록</BannedUserTitle>
            <BannedUserBox>
              {blockList.map((user) => (
                <BannedUser
                  img={user.thumbnail}
                  name={user.nickname}
                  onClickUnblock={() => onClickUnblock(user.id)} />
              ))}
            </BannedUserBox>
          </> : ''
          }
          {likeList.length > 0 ? <>
            <LikedTitleBox>
              <Liked>좋아요</Liked>
              <SubTitle>목록</SubTitle>
            </LikedTitleBox>
            <Gap height={35} />
            <CardList data={likeList} />
          </> : ''
          }
          {rentList.length > 0 ? <>
            <TitleBox>
              <Title>대여원해요</Title>
              <SubTitle>이력</SubTitle>
            </TitleBox>
            <Gap height={35} />
            <CardList data={rentList} />
            <Gap height={32} />
          </> : ''
          }
          {lendList.length > 0 ? <>
            <TitleBox>
              <Title>대여합니다</Title>
              <SubTitle>이력</SubTitle>
            </TitleBox>
            <Gap height={35} />
            <CardList data={lendList} />
            <Gap height={32} />
          </> : ''
          }
          {shareList.length > 0 ? <>
            <TitleBox>
              <Title>나눔합시다</Title>
              <SubTitle>이력</SubTitle>
            </TitleBox>
            <Gap height={35} />
            <CardList data={shareList} />
            <Gap height={32} />
          </> : ''
          }
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
  color: #5B756C;
  margin-right: 10px;
`;

const ProfileTitleText = styled.div`
  font-size: 45px;
  font-weight: bold;
  color: #8DC63F;
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
  background: ${({ imgUrl }) => `url(${imgUrl})`};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  height: 180px;
  width: 180px;
`;

const ProfileName = styled.div`
  font-size: 40px;
  color: #8DC63F;
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
  background: #8DC63F;
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
  color: #FF6C0F;
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
  color: #8DC63F;
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
  color: #5B756C;
  font-size: 60px;
  font-weight: bold;
`;

