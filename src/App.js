import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import styled from "@emotion/styled/macro";
import GlobalStyles from "./styles/GlobalStyles";
import NavBar from "./components/common/NavBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const ContentBox = styled.div``;

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <NavBar />
        </Container>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
