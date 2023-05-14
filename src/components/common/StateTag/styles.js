import styled from "@emotion/styled";

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

  &.possible {
    background-color: ${({ theme }) => theme.color.heart};
  }
  &.progress {
    background-color: ${({ theme }) => theme.color.lightGreen};
  }
  &.done {
    background-color: ${({ theme }) => theme.color.darkGray};
  }
`;
