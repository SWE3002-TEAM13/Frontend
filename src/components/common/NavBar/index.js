import {
  NavBarContainer,
  NavBarLogoContainer,
  NavBarMenuContainer,
  NavBarMenuText,
  StyledNavBar,
} from "./styles";
import Logo from "../Logo";
import { Link } from "react-router-dom";

function NavBar() {

  const handleLogout = () => {
    // access_token 쿠키 삭제
    document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // 페이지 새로고침
    window.location.reload();
  };

  const isLoggedIn = document.cookie.includes("access_token");

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
          <Link to="/myprofile">
            <NavBarMenuText>프로필</NavBarMenuText>
          </Link>
          {isLoggedIn ? (
            <NavBarMenuText onClick={handleLogout}>로그아웃</NavBarMenuText>
          ) : (
            <Link to="/login">
              <NavBarMenuText>로그인</NavBarMenuText>
            </Link>
          )}
        </NavBarMenuContainer>
      </NavBarContainer>
    </StyledNavBar>
  );
}

export default NavBar;
