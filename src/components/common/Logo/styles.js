import styled from "@emotion/styled";

export const LogoContainer = styled.img`
  width: ${({ variant }) => (variant === "small" ? "200px" : "400px")};
  height: ${({ variant }) => (variant === "small" ? "50px" : "100px")};
`;
