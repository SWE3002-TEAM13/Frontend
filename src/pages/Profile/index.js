import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { commonAxios } from "../../utils/commonAxios.js";
import CardList from "../../components/CardList";
import { getCookie } from "../../utils/getCookie.js";

function ProfilePage() {
  const { id } = useParams();
  const [profile, setProfile] = useState({});
  const [rentList, setRentList] = useState([]);
  const [lendList, setLendList] = useState([]);
  const [shareList, setShareList] = useState([]);
  const [like, setLike] = useState();

  useEffect(() => {
    commonAxios
      .get(`/user/profile/${id}`, {
        headers: {
          Authorization: `Bearer ${getCookie("access_token")}`,
        },
      })
      .then((res) => {
        setProfile(res.data.profile);
        setRentList(res.data.rentlist);
        setLendList(res.data.lendlist);
        setShareList(res.data.sharelist);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id, like]);

  return (
    <Container>
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
      <TitleBox>
        <Title>대여원해요</Title>
        <SubTitle>이력</SubTitle>
      </TitleBox>
      {rentList.length > 0 ? (
        <>
          <Gap height={35} />
          <CardList data={rentList} setLike={setLike} />
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
        </>
      ) : (
        ""
      )}
      <Gap height={32} />
      <TitleBox>
        <Title>나눔합시다</Title>
        <SubTitle>이력</SubTitle>
      </TitleBox>
      {shareList.length > 0 ? (
        <>
          <Gap height={35} />
          <CardList data={shareList} setLike={setLike} />
        </>
      ) : (
        ""
      )}
      <Gap height={32} />
    </Container>
  );
}

export default ProfilePage;

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
