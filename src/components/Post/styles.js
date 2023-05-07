import styled from "@emotion/styled";

export const InputForm = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  background-color: aliceblue;
`;

export const InputTitleContainer = styled.input`
  ::placeholder {
    font-size: 20px;
    color: ${({ theme }) => theme.color.darkGray};
  }
  :focus {
    outline: none;
  }
  background-color: ${({ theme }) => theme.color.gray};
  width: 100%;
  height: 65x;
  padding: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputTypeContainer = styled.div``;

export const SaveButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
