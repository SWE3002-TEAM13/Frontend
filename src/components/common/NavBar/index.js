import {
  NavBarContainer,
  NavBarLogoContainer,
  NavBarLogoText,
  NavBarLogoutContainer,
  NavBarLogoutText,
  NavBarLogoutIcon,
  NavBarMenuContainer,
  NavBarMenuText,
  StyledNavBar,
} from "./styles";

function NavBar(props) {
  return (
    <StyledNavBar>
      <NavBarContainer>
        <NavBarLogoContainer>
          <NavBarLogoText>성균:나누Re</NavBarLogoText>
        </NavBarLogoContainer>
      </NavBarContainer>
    </StyledNavBar>
  );
}

export default NavBar;
