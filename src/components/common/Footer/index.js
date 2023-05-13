import { StyledFooter, FooterContainer, FooterTextContainer } from "./styles";

function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterTextContainer>
          성균관대학교 소프트웨어학과 소프트웨어공학개론
        </FooterTextContainer>
        <FooterTextContainer>Team 13 Project</FooterTextContainer>
        <FooterTextContainer>
          Copyright © 2023 성균:나누Re All rights reserved.
        </FooterTextContainer>
      </FooterContainer>
    </StyledFooter>
  );
}

export default Footer;
