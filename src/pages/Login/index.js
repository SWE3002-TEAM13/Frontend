import Logo from "../../components/common/Logo";
import Button from "../../components/common/BigButton";
import TextInput from "../../components/common/TextInput";
import styled from "styled-components";
import Link from "../../components/common/Link";

function LoginPage() {
  return (
    <LoginContainer>
      <LoginBox>
        <Logo variant="big" />
        <Gap height={24} />
        <TextInput width="520px" placeholder="아이디" />
        <Gap height={8} />
        <TextInput width="520px" placeholder="비밀번호" />
        <Gap height={11} />
        <Button text="로그인" />
        <Gap height={24} />
        <LinksContainer>
          <Link text="회원 가입" to="/register" />
          <span>|</span>
          <Link text="아이디 찾기" to="" />
          <span>|</span>
          <Link text="비밀번호 찾기" to="" />
        </LinksContainer>
      </LoginBox>
    </LoginContainer>
  );
}

export default LoginPage;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Gap = styled.div`
  height: ${({ height }) => height}px;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 381px;
  font-size: 23px;
  color: #2c3e50;

  span {
    margin: 2px 0;
  }
`;
