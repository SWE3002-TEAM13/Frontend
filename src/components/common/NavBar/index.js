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
import Logo from "../Logo";

function NavBar(props) {
  return (
    <StyledNavBar>
      <NavBarContainer>
        <NavBarLogoContainer>
          <Logo variant="small" />
        </NavBarLogoContainer>
      </NavBarContainer>
    </StyledNavBar>
  );
}

export default NavBar;
