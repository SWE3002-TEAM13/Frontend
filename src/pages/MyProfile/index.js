import React from "react";
import styled from "styled-components";
import BannedUser from "../../components/BannedUser/index.js";
import emblem from "../../assets/emblem.png";
import Card from "../../components/Card/index.js";
import { useNavigate } from "react-router-dom";

function MyProfilePage() {
  const navigate = useNavigate();

  return (
    <Container>
      <ProfileTitleBox>
        <ProfileTitleName>성균나누Re님</ProfileTitleName>
        <ProfileTitleText>프로필</ProfileTitleText>
      </ProfileTitleBox>
      <ProfileBox>
        <ImgUploadDiv imgUrl={emblem} />
        <ProfileDiv>
          <ProfileName>성규나누Re</ProfileName>
          <CampusName>자연과학캠퍼스(율전)</CampusName>
        </ProfileDiv>
      </ProfileBox>
      <Button
        width="600px"
        onClick={() => navigate("/profileedit")}
      >
        프로필수정
      </Button>
      <BannedUserTitle>유저 차단 목록</BannedUserTitle>
      <BannedUserBox>
        <BannedUser img={emblem} name="닉네임" />
        <BannedUser img={emblem} name="닉네임" />
        <BannedUser img={emblem} name="닉네임" />
        <BannedUser img={emblem} name="닉네임" />
      </BannedUserBox>
      <LikedTitleBox>
        <Liked>좋아요</Liked>
        <SubTitle>목록</SubTitle>
      </LikedTitleBox>
      <Gap height={35} />
      <Card liked={true} />
      <Gap height={32} />
      <Card liked={true} />
      <TitleBox>
        <Title>대여원해요</Title>
        <SubTitle>이력</SubTitle>
      </TitleBox>
      <Gap height={35} />
      <Card liked={false} />
      <Gap height={32} />
      <Card liked={false} />
      <TitleBox>
        <Title>대여합니다</Title>
        <SubTitle>이력</SubTitle>
      </TitleBox>
      <Gap height={35} />
      <Card liked={false} />
      <Gap height={32} />
      <Card liked={false} />
      <TitleBox>
        <Title>나눔합시다</Title>
        <SubTitle>이력</SubTitle>
      </TitleBox>
      <Gap height={35} />
      <Card liked={false} />
      <Gap height={32} />
      <Card liked={false} />
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
  width: 510px;
  justify-content: space-between;
`;

const ProfileTitleName = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: #5B756C;
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

