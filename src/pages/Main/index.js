import React, { useEffect, useState } from "react";
import MainPicture from "../../assets/main_picture.png";
import { MainPictureContainer } from "./styles";
import Announcement from "../../components/Announcement";
import styled from "styled-components";
import MainCard from "../../components/MainCard";

function MainPage() {
  const [announcementList, setAnnouncementList] = useState([]);
  const [rentList, setRentList] = useState([]);
  const [lendList, setLendList] = useState([]);
  const [shareList, setShareList] = useState([]);

  const getAnnouncement = () => {
    fetch(`http://localhost:8000/announcement`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      }
    })
      .then(response => response.json())
      .then(data => {
        setAnnouncementList(data);
      })
      .catch(error => {
        console.error("Error occurred:", error);
      });
  }

  const getRent = () => {
    fetch(`http://localhost:8000/post/?type=rent`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      }
    })
      .then(response => response.json())
      .then(data => {
        setRentList(data);
        console.log(data);
      })
      .catch(error => {
        console.error("Error occurred:", error);
      });
  }

  const getLend = () => {
    fetch(`http://localhost:8000/post/?type=lend`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      }
    })
      .then(response => response.json())
      .then(data => {
        setLendList(data);
        console.log(data);
      })
      .catch(error => {
        console.error("Error occurred:", error);
      });
  }

  const getShare = () => {
    fetch(`http://localhost:8000/post/?type=share`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      }
    })
      .then(response => response.json())
      .then(data => {
        setShareList(data);
        console.log(data);
      })
      .catch(error => {
        console.error("Error occurred:", error);
      });
  }


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
          {announcementList.map((announcement) => (
            <>
              <Announcement data={announcement} />
              <Gap height={16} />
            </>
          ))
          }
        </AnnouncementContainer>
        <TitleBox>
          <SubTitle>최근에 올라온&nbsp;</SubTitle>
          <Title>대여원해요</Title>
        </TitleBox>
        <Explain>성균관대생이 최근에 필요하다고 원한 상품!</Explain>
        <CardContainer>
          {rentList.map((rent) => (
            <>
              <MainCard data={rent} />
              <Gap width={30} />
            </>

          ))}
        </CardContainer>
        <TitleBox>
          <SubTitle>최근에 올라온&nbsp;</SubTitle>
          <Title>대여합니다</Title>
        </TitleBox>
        <Explain>물건을 사지 말고 대여해서 돈을 아껴보자</Explain>
        <CardContainer>
          {lendList.map((lend) => (
            <>
              <MainCard data={lend} />
              <Gap width={30} />
            </>

          ))}
        </CardContainer>
        <TitleBox>
          <SubTitle>최근에 올라온&nbsp;</SubTitle>
          <Title>나눔</Title>
        </TitleBox>
        <Explain>대충 설명 적기....</Explain>
        <CardContainer>
          {shareList.map((share) => (
            <>
              <MainCard data={share} />
              <Gap width={30} />
            </>

          ))}
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
  color: #FF6C0F;
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
`
const SubTitle = styled.div`
  margin-top: 37px;
  font-size: 60px;
  color: black;
`;

const Title = styled.div`
  color: #2B6653;
  font-size: 60px;
  font-weight: bold;
`;

const Explain = styled.div`
  color: #737373;
  font-size: 30px;
`

const CardContainer = styled.div`
  margin-top: 16px;
  width: 1533px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;