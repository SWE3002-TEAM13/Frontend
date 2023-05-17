import styled from '@emotion/styled';

export const ChatRoomCardContainer = styled.div`
  width: 100%;
`;

export const ChatRoomCardContainerTitle = styled.h2`
  font-size: 20px;
  text-align: center;
  margin: 1rem 0 1rem 0;
  color: ${({ theme }) => theme.color.lightGreen};
  span {
    color: ${({ theme }) => theme.color.green};
  }
`;

export const ChatRoomCard = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 5rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  box-shadow: 0 5px 5px -5px gray;
  cursor: pointer;
`;
