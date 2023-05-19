import styled from "@emotion/styled";

export const StyledButton = styled.div`
  width: 150px;
  min-width: max-content;
  height: 40px;
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
  background-color: ${({ theme }) => theme.color.gray};
  &.active {
    background-color: ${({ theme }) => theme.color.green};
  }
  &.basic {
    background-color: ${({ theme }) => theme.color.lightGreen};
  }
  :disabled {
    background-color: ${({ theme }) => theme.color.darkGray};
  }
`;
