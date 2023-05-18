import React, { useEffect, useState } from 'react';
import MainPicture from '../../assets/main_picture.png';
import { MainPictureContainer } from './styles';
import Announcement from '../../components/Announcement';
import styled from 'styled-components';
import MainCard from '../../components/MainCard';
import { commonAxios } from '../../utils/commonAxios';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const [announcementList, setAnnouncementList] = useState([]);
  const [rentList, setRentList] = useState([]);
  const [lendList, setLendList] = useState([]);
  const [shareList, setShareList] = useState([]);

  const navigate = useNavigate();

  const getAnnouncement = () => {
    commonAxios
      .get(`/announcement`)
      .then(res => {
        // setAnnouncementList(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const getRent = () => {
    commonAxios
      .get(`/post/?type=rent`)
      .then(res => {
        // setRentList(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const getLend = () => {
    commonAxios
      .get(`/post/?type=lend`)
      .then(res => {
        // setLendList(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const getShare = () => {
    commonAxios
      .get(`/post/?type=share`)
      .then(res => {
        // setShareList(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAnnouncement();
    getRent();
    getLend();
    getShare();
  }, []);

  return (
    <>
      <MainPictureContainer
        src={MainPicture}
        alt="main_picture"
      ></MainPictureContainer>
      <Container>
        <AnnouncementTitle>공지사항</AnnouncementTitle>
        <AnnouncementContainer>
          {announcementList.length > 0 ? (
            announcementList.map(announcement => (
              <>
                <Announcement data={announcement} />
                <Gap height={16} />
              </>
            ))) : ''
          }
        </AnnouncementContainer>
        <TitleBox>
          <SubTitle>최근에 올라온&nbsp;</SubTitle>
          <Title>대여원해요</Title>
        </TitleBox>
        <Explain>성균관대생이 최근에 필요하다고 원한 상품!</Explain>
        <CardContainer>
          {rentList.length > 0 ? (
            rentList.map(rent => (
              <>
                <MainCard data={rent} onClick={() => navigate(`/info/${rent.id}`)} />
                <Gap width={30} />
              </>
            ))) : ''
          }
        </CardContainer>
        <TitleBox>
          <SubTitle>최근에 올라온&nbsp;</SubTitle>
          <Title>대여합니다</Title>
        </TitleBox>
        <Explain>물건을 사지 말고 대여해서 돈을 아껴보자</Explain>
        <CardContainer>
          {lendList.length > 0 ? (
            lendList.map(lend => (
              <>
                <MainCard data={lend} onClick={() => navigate(`/info/${lend.id}`)} />
                <Gap width={30} />
              </>
            ))) : ''
          }
        </CardContainer>
        <TitleBox>
          <SubTitle>최근에 올라온&nbsp;</SubTitle>
          <Title>나눔</Title>
        </TitleBox>
        <Explain>대충 설명 적기....</Explain>
        <CardContainer>
          {shareList.length > 0 ? (
            shareList.map(share => (
              <>
                <MainCard data={share} onClick={() => navigate(`/info/${share.id}`)} />
                <Gap width={30} />
              </>
            ))) : ''
          }
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

const AnnouncementTitle = styled.div`
  color: #ff6c0f;
  font-size: 60px;
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
  font-size: 60px;
  color: black;
`;

const Title = styled.div`
  color: #2b6653;
  font-size: 60px;
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
