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
import Footer from "./components/common/Footer";

//test
import SearchBox from "./components/SearchBox";
import CardList from "./components/CardList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const ContentBox = styled.div`
  padding: 80px 33vh 20px 33vh;
`;

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <NavBar />
          <ContentBox>
            <SearchBox></SearchBox>
            <CardList></CardList>
          </ContentBox>
          <Footer />
        </Container>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
