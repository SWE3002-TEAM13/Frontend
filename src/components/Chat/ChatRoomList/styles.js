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
  background-color: ${({ theme, selected }) =>
    selected ? theme.color.lightGreen : theme.color.white};
  width: 100%;
  height: 5rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  box-shadow: 0 5px 5px -5px gray;
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  flex-direction: row;
  align-items: center;
  padding-left: 1rem;

  img {
    width: 60px;
    height: 60px;
    border-radius: 15px;
    box-shadow: 0 5px 5px -5px gray;
  }

  div {
    width: 150px;
    .chatNickname {
    }
    .chatSendTime {
      color: ${({ theme }) => theme.color.black};
      font-size: 0.4rem;
    }
    .chatRecentMessage {
      color: ${({ theme }) => theme.color.darkGray};
      font-size: 0.5rem;
      max-height: 2rem;
      overflow: hidden;
    }
  }
`;
