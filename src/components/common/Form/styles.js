import styled from "@emotion/styled";

export const FormContainer = styled.form`
  height: 100%;
  min-width: 800px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 5px 5px -5px gray;
  overflow: hidden;
`;
