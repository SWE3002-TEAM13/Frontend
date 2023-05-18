import { useEffect } from 'react';
import { commonAxios } from '../../utils/commonAxios';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as CheckIcon } from '../../assets/check.svg';
import Logo from '../../components/common/Logo';
import styled from '@emotion/styled';

export function VerifyPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const navigate = useNavigate();

  useEffect(() => {
    const token = queryParams.get('token');
    const username = queryParams.get('username');

    commonAxios
      .get('verify', {
        params: {
          token,
          username,
        },
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <Container>
      <Logo />
      <CheckIcon />
      <h1>회원가입이 성공적으로 완료되었습니다!</h1>
      <button
        onClick={() => {
          navigate('/login');
        }}
      >
        시작하기
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
