import styled from "@emotion/styled/macro";

export const StyledFooter = styled.footer`
  margin-top: 100px;
  display: flex;

  padding: 40px 0;
  background-color: ${({ theme }) => theme.color.grayGreen};
  width: 100%;
  color: ${({ theme }) => theme.color.white};
`;

export const FooterContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 1280px;
`;

export const FooterTextContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12px;
`;
