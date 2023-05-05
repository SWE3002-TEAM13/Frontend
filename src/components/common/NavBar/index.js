import {
  NavBarContainer,
  NavBarLogoContainer,
  NavBarMenuContainer,
  NavBarMenuText,
  StyledNavBar,
} from "./styles";
import Logo from "../Logo";

function NavBar(props) {
  return (
    <StyledNavBar>
      <NavBarContainer>
        <NavBarLogoContainer>
          <Logo variant="small" />
        </NavBarLogoContainer>
        <NavBarMenuContainer>
          <NavBarMenuText>대여원해요</NavBarMenuText>
          <NavBarMenuText>대여합니다</NavBarMenuText>
          <NavBarMenuText>나눔합시다</NavBarMenuText>
          <NavBarMenuText>채팅해요</NavBarMenuText>
          <NavBarMenuText>프로필</NavBarMenuText>
          <NavBarMenuText>로그아웃</NavBarMenuText>
        </NavBarMenuContainer>
      </NavBarContainer>
    </StyledNavBar>
  );
}

export default NavBar;
