import styled from "@emotion/styled/macro";
import { NAVBAR_HEIGHT } from "../../../constants/navbar";

export const StyledNavBar = styled.header`
  position: fixed;
  width: 100%;
  height: ${NAVBAR_HEIGHT}px;
  background-color: ${({ theme }) => theme.color.background};
  z-index: 100;
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border-color: ${({ theme }) => theme.color.grayGreen};
  align-items: center;
`;

export const NavBarContainer = styled.nav`
  margin: auto auto;
  display: flex;
  justify-content: space-between;
  background-color: blue;
  max-width: 1280px;
`;

export const NavBarLogoContainer = styled.div`
  display: flex;
  background-color: red;
  column-gap: 4px;
  align-items: center;
`;

export const NavBarLogoText = styled.h1`
  font-weight: 700;
  font-size: 20px;
`;

export const NavBarMenuContainer = styled.ul`
  display: flex;
  column-gap: 40px;
  align-items: center;
`;

export const NavBarMenuText = styled.li`
  font-weight: 700;
  font-size: 16px;
`;

export const NavBarLogoutContainer = styled.li`
  display: flex;
  align-items: center;
`;
export const NavBarLogoutText = styled.div`
  font-weight: 400;
  font-size: 16px;
  margin-right: 6px;
`;

export const NavBarLogoutIcon = styled.div`
  width: 24px;
  height: 24px;
`;
