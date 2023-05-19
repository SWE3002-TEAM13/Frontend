import React, { useEffect, useState } from "react";
import MainPicture from "../../assets/main_picture.png";
import Announcement from "../../components/Announcement";
import styled from "styled-components";
import MainCard from "../../components/MainCard";
import { commonAxios } from "../../utils/commonAxios";
import { useNavigate } from "react-router-dom";
import { getCookie } from '../../utils/getCookie';

function MainPage() {
  const [announcementList, setAnnouncementList] = useState([]);
  const [rentList, setRentList] = useState([]);
  const [lendList, setLendList] = useState([]);
  const [shareList, setShareList] = useState([]);

  const navigate = useNavigate();

  const getAnnouncement = () => {
    commonAxios
      .get(`/announcement`)
      .then((res) => {
        setAnnouncementList(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getLanding = () => {
    commonAxios
      .get(`/post/landing`, {
        headers: {
          Authorization: `Bearer ${getCookie('access_token')}`,
        },
      })
      .then((res) => {
        setRentList(res.data.rentList);
        setLendList(res.data.lendList);
        setShareList(res.data.shareList);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAnnouncement();
    getLanding();
  }, []);

  return (
    <>
      <WapperPicture>
        <MainPictureContainer
          src={MainPicture}
          alt="main_picture"
        ></MainPictureContainer>
        <WapperText1>성균관대생을 위한 공유경제 플랫폼</WapperText1>
        <WapperText2>
          성균:<span style={{ color: "#2b6653" }}>나누Re</span>
        </WapperText2>
      </WapperPicture>

      <Container>
        <AnnouncementTitle>공지사항</AnnouncementTitle>
        <AnnouncementContainer>
          {announcementList.length > 0
            ? announcementList.map((announcement) => (
                <>
                  <Announcement key={announcement} data={announcement} />
                  <Gap height={16} />
                </>
              ))
            : ""}
        </AnnouncementContainer>
        <Gap height={50} />
        <TitleBox>
          <SubTitle>최근에 올라온&nbsp;</SubTitle>
          <Title>대여원해요</Title>
        </TitleBox>
        <Explain>성균관대생이 최근에 필요하다고 원한 상품!</Explain>
        <CardContainer>
          {rentList.length > 0
            ? rentList.map((rent) => (
                <>
                  <MainCard
                    key={rent.id}
                    data={rent}
                    onClick={() => navigate(`/info/${rent.id}`)}
                  />
                  <Gap width={30} />
                </>
              ))
            : ""}
        </CardContainer>
        <Gap height={50} />
        <TitleBox>
          <SubTitle>최근에 올라온&nbsp;</SubTitle>
          <Title>대여합니다</Title>
        </TitleBox>
        <Explain>물건을 사지 말고 대여해서 돈을 아껴보자</Explain>
        <CardContainer>
          {lendList.length > 0
            ? lendList.map((lend) => (
                <>
                  <MainCard
                    data={lend}
                    onClick={() => navigate(`/info/${lend.id}`)}
                  />
                  <Gap width={30} />
                </>
              ))
            : ""}
        </CardContainer>
        <Gap height={50} />
        <TitleBox>
          <SubTitle>최근에 올라온&nbsp;</SubTitle>
          <Title>나눔합시다</Title>
        </TitleBox>
        <Explain>학우들과 함께 나눔을 실천해 지구를 지켜요</Explain>
        <CardContainer>
          {shareList.length > 0
            ? shareList.map((share) => (
                <>
                  <MainCard
                    key={share.id}
                    data={share}
                    onClick={() => navigate(`/info/${share.id}`)}
                  />
                  <Gap width={30} />
                </>
              ))
            : ""}
        </CardContainer>
      </Container>
    </>
  );
}

export default MainPage;

const Container = styled.div`
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  max-width: 1533px;
  margin-left: auto;
  margin-right: auto;
`;

const MainPictureContainer = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
`;

const WapperPicture = styled.div`
  width: 100%;
  position: relative;
`;

const WapperText1 = styled.p`
  width: 100%;
  top: 30%;
  right: 10%;
  position: absolute;
  text-align: right;
  color: #2b6653;
  font-size: 30px;
  font-weight: bold;
`;

const WapperText2 = styled.p`
  width: 100%;
  top: 40%;
  right: 10%;
  position: absolute;
  text-align: right;
  color: #8dc63f;
  font-size: 60px;
  font-weight: 1000;
`;

const AnnouncementTitle = styled.div`
  color: #ff6c0f;
  font-size: 40px;
  font-weight: bold;
`;

const Gap = styled.div`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`;

const AnnouncementContainer = styled.div`
  width: 100%;
  padding: 0px 112px;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: baseline;
`;
const SubTitle = styled.div`
  margin-top: 37px;
  font-size: 40px;
  color: black;
`;

const Title = styled.div`
  color: #2b6653;
  font-size: 40px;
  font-weight: bold;
`;

const Explain = styled.div`
  color: #737373;
  font-size: 30px;
`;

const CardContainer = styled.div`
  margin-top: 16px;
  width: 1533px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
