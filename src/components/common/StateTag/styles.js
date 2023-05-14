import styled from "@emotion/styled";

<<<<<<< HEAD
export const StateContainer = styled.button`
  :focus {
    cursor: pointer;
  }

  font-size: 3px;
  height: 20px;
  width: 60px;
  border-radius: 10px;
  border: none;
  line-height: 20px;
  text-align: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.gray};
  color: ${({ theme }) => theme.color.white};
  &.active {
    background-color: ${({ theme }) => theme.color.heart};
  }
=======
export const StateContainer = styled.div`
  font-size: 3px;
  height: 20px;
  width: 50px;
  border-radius: 10px;
  line-height: 20px;
  text-align: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.heart};
  color: ${({ theme }) => theme.color.white};
>>>>>>> processing
`;
