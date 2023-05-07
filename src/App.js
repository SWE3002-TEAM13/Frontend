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

// Pages import
import LendPage from "./pages/Lend";
import MainPage from "./pages/Main";
import RentPage from "./pages/Rent";
import SharePage from "./pages/Share";
import ChatPage from "./pages/Chat";
import ProfilePage from "./pages/Profile";
import NotFound from "./components/common/NotFound";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const ContentBox = styled.div`
  min-height: 50vh;
  padding: 80px 33vh 20px 33vh;
`;

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Container>
            <NavBar />
            <ContentBox>
              <Routes>
                <Route path="/" exact={true} element={<MainPage />} />
                <Route path="/rent" exact={true} element={<RentPage />} />
                <Route path="/lend" exact={true} element={<LendPage />} />
                <Route path="/share" exact={true} element={<SharePage />} />
                <Route path="/chat" exact={true} element={<ChatPage />} />
                <Route path="/profile" exact={true} element={<ProfilePage />} />
                <Route path="*" exact={true} element={<NotFound />} />
              </Routes>
            </ContentBox>
            <Footer />
          </Container>
        </Router>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
