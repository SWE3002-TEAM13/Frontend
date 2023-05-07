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
  box-shadow: 0px 0px 5px 0px gray;
  align-items: center;
`;

export const NavBarContainer = styled.nav`
  margin: auto auto;
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
`;

export const NavBarLogoContainer = styled.div`
  display: flex;
  column-gap: 4px;
  align-items: center;
`;

export const NavBarMenuContainer = styled.ul`
  display: flex;
  column-gap: 40px;
  align-items: center;
  padding-right: 30px;
`;

export const NavBarMenuText = styled.li`
  font-weight: 400;
  font-size: 12px;
  min-width: max-content;
`;
