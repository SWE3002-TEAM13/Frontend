import styled from "@emotion/styled";

export const LogoContainer = styled.img`
  width: ${({ variant }) => (variant === "small" ? "400px" : "200px")};
  height: ${({ variant }) => (variant === "small" ? "100px" : "50px")};
`;
