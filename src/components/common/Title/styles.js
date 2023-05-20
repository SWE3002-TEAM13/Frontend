import styled from "@emotion/styled";

export const StyledTitle = styled.div`
  min-width: max-content;
  display: flex;
  font-size: 35px;
`;

export const LightGreenText = styled.p`
  color: ${({ theme }) => theme.color.lightGreen};
`;

export const GreenText = styled.p`
  color: ${({ theme }) => theme.color.green};
`;
