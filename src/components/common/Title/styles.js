import styled from "@emotion/styled";

export const StyledTitle = styled.div`
  display: flex;
  font-size: 30px;
`;

export const LightGreenText = styled.p`
  color: ${({ theme }) => theme.color.lightGreen};
`;

export const GreenText = styled.p`
  color: ${({ theme }) => theme.color.green};
`;
