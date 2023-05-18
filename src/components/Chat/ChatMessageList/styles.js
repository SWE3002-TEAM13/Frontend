import styled from '@emotion/styled';

export const ChatContentContainer = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  box-shadow: 0 5px 5px -5px gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ChatMessageContainer = styled.div`
  padding: 1.5rem;
  max-height: 600px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.color.white};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.lightGreen};
    border-radius: 10px;
  }
`;

export const ChatMessageInputContainer = styled.div`
  padding: 0.8rem;
  display: flex;
  gap: 0.5rem;
  flex-direction: row;
  input {
    height: 40px;
    width: 100%;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    border: 0;
    outline: 0;
    padding: 0.5rem 1rem;
  }
  button {
    height: 40px;
    width: 40px;
    background-color: transparent;
    cursor: pointer;
    border: 0;
    svg g rect {
      fill: #5b756c;
    }
  }
`;

export const ChatMessage = styled.div`
  margin-bottom: 0.8rem;
  display: flex;
  gap: 0.5rem;
  flex-direction: ${({ me }) => (me ? 'row-reverse' : 'row')};
  text-align: ${({ me }) => (me ? 'right' : 'left')};
  img {
    width: 50px;
    height: 50px;
    border-radius: 15px;
    box-shadow: 0 5px 5px -5px gray;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: ${({ me }) => (me ? 'end' : 'start')};
    .messageText {
      background-color: ${({ theme, me }) =>
        me ? theme.color.lightGreen : theme.color.gray};
      color: ${({ theme, me }) => (me ? theme.color.white : theme.color.black)};
      padding: 0.2rem 0.5rem;
      border-radius: 8px;
      max-width: 350px;
      width: max-content;
      text-align: left;
    }
    .messageDate {
      margin-top: 0.5rem;
      font-size: 0.5rem;
      color: #808080;
    }
  }
`;
