import {
  NavBarContainer,
  NavBarLogoContainer,
  NavBarMenuContainer,
  NavBarMenuText,
  StyledNavBar,
} from "./styles";
import Logo from "../Logo";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <StyledNavBar>
      <NavBarContainer>
        <Link to="/">
          <NavBarLogoContainer>
            <Logo variant="small" />
          </NavBarLogoContainer>
        </Link>
        <NavBarMenuContainer>
          <Link to="/rent">
            <NavBarMenuText>대여원해요</NavBarMenuText>
          </Link>
          <Link to="/lend">
            <NavBarMenuText>대여합니다</NavBarMenuText>
          </Link>
          <Link to="/share">
            <NavBarMenuText>나눔합시다</NavBarMenuText>
          </Link>
          <Link to="/chat">
            <NavBarMenuText>채팅해요</NavBarMenuText>
          </Link>
          <Link to="/profile">
            <NavBarMenuText>프로필</NavBarMenuText>
          </Link>
          <NavBarMenuText>로그아웃</NavBarMenuText>
        </NavBarMenuContainer>
      </NavBarContainer>
    </StyledNavBar>
  );
}

export default NavBar;
