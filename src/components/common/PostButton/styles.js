import styled from "@emotion/styled";

export const StyledButton = styled.div`
  width: 120px;
  min-width: max-content;
  height: 30px;
`;

export const ButtonContainer = styled.button`
  :focus {
    cursor: pointer;
  }
  width: 100%;
  height: 100%;
  padding: 5px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.lightGreen};
`;
