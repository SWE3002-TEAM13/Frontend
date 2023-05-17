import styled from "@emotion/styled";

export const StyledChatButton = styled.button`
  :focus {
    cursor: pointer;
  }
  border: none;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.lightGreen};
  box-sizing: border-box;
  box-shadow: 0 5px 5px -5px gray;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ChatIconContainer = styled.img`
  width: 35px;
  height: 35px;
`;
