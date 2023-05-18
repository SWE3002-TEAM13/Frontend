import styled from '@emotion/styled';

export const StyledButton = styled.div`
  width: 520px;
  min-width: max-content;
  height: 50px;
`;

export const ButtonContainer = styled.button`
  :focus {
    cursor: pointer;
  }
  width: 100%;
  height: 100%;
  padding: 5px;
  font-size: 25px;
  border-radius: 10px;
  border: 0;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.lightGreen};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
