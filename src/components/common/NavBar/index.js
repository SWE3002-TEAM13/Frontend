import {
  NavBarContainer,
  NavBarLogoContainer,
  NavBarMenuContainer,
  NavBarMenuText,
  StyledNavBar,
} from './styles';
import Logo from '../Logo';
import { Link } from 'react-router-dom';
import { getCookie } from '../../../utils/getCookie';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // access_token 쿠키 삭제
    document.cookie =
      'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    navigate('/');
  };

  const isLoggedIn = getCookie('access_token') !== null;

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
          {isLoggedIn && (
            <Link to="/chat">
              <NavBarMenuText>채팅해요</NavBarMenuText>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/myprofile">
              <NavBarMenuText>프로필</NavBarMenuText>
            </Link>
          )}
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
