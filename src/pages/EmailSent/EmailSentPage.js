import { useNavigate } from 'react-router-dom';
import { ReactComponent as MailIcon } from '../../assets/mail.svg';
import Logo from '../../components/common/Logo';
import styled from '@emotion/styled';

export function EmailSentPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo />
      <MailIcon />
      <h1>입력하신 이메일로 인증 링크가 전송되었습니다!</h1>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        돌아가기
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;

  img {
    margin-bottom: 5rem;
  }

  svg {
    width: 6rem;
    height: 6rem;
    margin-bottom: 3rem;
  }

  h1 {
    font-size: 1.8rem;
  }

  button {
    margin-top: 2rem;
    width: 10rem;
    height: 2.5rem;
    border: none;
    cursor: pointer;
    background-color: #8dc63f;
    color: white;
    font-size: 1rem;
  }
`;
