import Logo from "../../components/common/Logo";
import styled from "styled-components";
import TextInput from "../../components/common/TextInput";
import React, {useState} from "react";

function RegisterPage() {
  const [email, setEmail] = useState('');

  const validateEmail = (email) => {
    const emailPattern = /@(g\.skku\.edu|skku\.edu)$/;
    if(!emailPattern.test(email)) { 
      alert("학교 이메일을 사용해주세요.");
    }
    return emailPattern.test(email);
  };

  const handleRegister = () => {
    validateEmail(email);
  };

  return (
    <Container>
      <RegisterBox>
        <Gap height={42} />
        <Logo variant="big" />
        <RegisterText>회원가입</RegisterText>
        <InputDiv>
          <InputTitle>아이디</InputTitle>
          <TextInput width="530px" />
          <InputExplain>· 5-20자 이내의 영문, 숫자와 언더바만 가능합니다.</InputExplain>
        </InputDiv>
        <InputDiv>
          <InputTitle>비밀번호</InputTitle>
          <TextInput width="530px" />
          <InputExplain>
            · 비밀번호는 최소 8자 이상이어야 합니다. <br />
            · 숫자로만 이루어진 비밀번호는 사용할 수 없습니다.
          </InputExplain>
        </InputDiv>
        <InputDiv>
          <InputTitle>비밀번호 확인</InputTitle>
          <TextInput width="530px" />
          <InputExplain>· 확인을 위해 동일한 비밀번호를 입력해주세요.</InputExplain>
        </InputDiv>
        <InputDiv>
          <InputTitle>이메일</InputTitle>
          <TextInput
            width="530px"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputExplain>
            · 확인을 위해 학교 이메일을 사용해주세요. <br />
            &nbsp;(g.skku.edu, skku.edu)
          </InputExplain>
        </InputDiv>
        <ImgContainer>
          <ImgTextDiv>
            <InputTitle>프로필 사진</InputTitle>
            <NicknameExplain>자신을 대표할 <br /> 사진을 설정하세요! </NicknameExplain>
            <SmallButton background="#8DC63F">업로드</SmallButton>
            <SmallButton background="#C4C4C4">삭제</SmallButton>
          </ImgTextDiv>
          <ImgUploadDiv />
        </ImgContainer>
        <InputDiv>
          <InputTitle>닉네임</InputTitle>
          <NicknameExplain>다른 사람들에게 보여줄 닉네임을 설정하세요!</NicknameExplain>
          <TextInput width="530px" />
        </InputDiv>
        <CheckBoxDiv>
          <CheckBoxTitle>위치</CheckBoxTitle>
          <CheckBoxText>자연과학캠퍼스(율전)</CheckBoxText>
          <input type="checkbox" />
          <CheckBoxText>인문사회과학캠퍼스(명륜)</CheckBoxText>
          <input type="checkbox" />
        </CheckBoxDiv>
        <Button onClick={handleRegister}>회원가입</Button>
      </RegisterBox>
    </Container>
  );
}

export default RegisterPage;

const Container = styled.div`
  margin-top: 79px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const Gap = styled.div`
  height: ${({ height }) => height}px;
`;

const SmallButton = styled.button`
  border: none;
  background: ${({ background }) => background};
  width: 70px;
  height: 39px;
  border-radius: 8px;
  color: white;
  font-size: 18px;
  margin-right: 10px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;

const RegisterText = styled.div`
  font-weight: 700;
  font-size: 35px;
  font-style: normal;
  color: #2C3E50;
`;

const InputDiv = styled.div``;

const CheckBoxTitle = styled.div`
  color: #000000;
  font-size: 25px;
`;

const CheckBoxText = styled.div`
  color: #6C757D;
  font-size: 18px;
`;

const CheckBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 35px;
  width: 530px;
`;

const InputTitle = styled.div`
  display: flex;
  font-style: normal;
  font-size: 23px;
  color: #2C3E50;
  margin-bottom: 6px;
`;

const InputExplain = styled.div`
  font-size: 20px;
  color: #737373;
  margin: 12px 0 17px 15px;
`;

const NicknameExplain = styled.div`
  font-size: 15px;
  color: #737373;
  margin-bottom: 13px;
`;

const RegisterBox = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #C4C4C4;
  border-radius: 20px;
  margin: 0 auto;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 530px;
`;

const ImgTextDiv = styled.div`
  width: 200px;
`;

const ImgUploadDiv = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  height: 180px;
  width: 180px;
`;

const Button = styled.button`
  border: none;
  width: 530px;
  height: 50px;
  background: #8DC63F;
  color: white;
  font-size: 23px;
  margin-bottom: 41px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
