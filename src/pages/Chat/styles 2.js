import styled from '@emotion/styled';

export const ChatPageTitle = styled.h1`
  font-size: 32px;
  text-align: center;
  margin: 3rem 0 2rem 0;
  color: ${({ theme }) => theme.color.lightGreen};
  span {
    color: ${({ theme }) => theme.color.green};
  }
`;

export const ChatPageGrid = styled.div`
  display: grid;
  grid-template-columns: 15rem 30rem;
  gap: 1rem;
  justify-content: center;
`;
