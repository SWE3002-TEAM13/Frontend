import styled from "@emotion/styled";

export const StyledButton = styled.div`
  width: 120px;
  min-width: max-content;
<<<<<<< HEAD
  height: 40px;
=======
  height: 30px;
>>>>>>> processing
`;

export const ButtonContainer = styled.button`
  :focus {
    cursor: pointer;
  }
<<<<<<< HEAD

=======
>>>>>>> processing
  width: 100%;
  height: 100%;
  padding: 5px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  color: ${({ theme }) => theme.color.white};
<<<<<<< HEAD
  background-color: ${({ theme }) => theme.color.gray};
  &.active {
    background-color: ${({ theme }) => theme.color.green};
  }
=======
  background-color: ${({ theme }) => theme.color.lightGreen};
>>>>>>> processing
`;
