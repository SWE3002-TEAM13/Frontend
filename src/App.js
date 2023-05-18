import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import styled from '@emotion/styled/macro';
import GlobalStyles from './styles/GlobalStyles';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer';
import NotFound from './components/common/NotFound';

// Pages import
import LendPage from './pages/Lend';
import MainPage from './pages/Main';
import RentPage from './pages/Rent';
import SharePage from './pages/Share';
import ChatPage from './pages/Chat';
import MyProfilePage from './pages/MyProfile';
import PostPage from './pages/Post';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ProfileEditPage from './pages/ProfileEdit';
import ProfilePage from './pages/Profile';
import InfoPage from './pages/PostInfo';
import EditPage from './pages/EditInfo';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const ContentBox = styled.div`
  padding: 50px 0px;
`;

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Routes>
            {/* 렌더링에 NavBar와 Footer 포함 */}
            <Route
              path="/"
              element={
                <Container>
                  <NavBar />
                  <ContentBox>
                    <MainPage />
                  </ContentBox>
                  <Footer />
                </Container>
              }
            />
            <Route
              path="/rent"
              element={
                <Container>
                  <NavBar />
                  <ContentBox>
                    <RentPage />
                  </ContentBox>
                  <Footer />
                </Container>
              }
            />
            <Route
              path="/lend"
              element={
                <Container>
                  <NavBar />
                  <ContentBox>
                    <LendPage />
                  </ContentBox>
                  <Footer />
                </Container>
              }
            />
            <Route
              path="/share"
              element={
                <Container>
                  <NavBar />
                  <ContentBox>
                    <SharePage />
                  </ContentBox>
                  <Footer />
                </Container>
              }
            />
            <Route
              path="/info/:id"
              element={
                <Container>
                  <NavBar />
                  <ContentBox>
                    <InfoPage />
                  </ContentBox>
                  <Footer />
                </Container>
              }
            />
            <Route
              path="/chat"
              element={
                <Container>
                  <NavBar />
                  <ContentBox>
                    <ChatPage />
                  </ContentBox>
                  <Footer />
                </Container>
              }
            />
            <Route
              path="/myprofile"
              element={
                <Container>
                  <NavBar />
                  <ContentBox>
                    <MyProfilePage />
                  </ContentBox>
                  <Footer />
                </Container>
              }
            />
            <Route
              path="/post"
              element={
                <Container>
                  <NavBar />
                  <ContentBox>
                    <PostPage />
                  </ContentBox>
                  <Footer />
                </Container>
              }
            />
            <Route
              path="/edit/:id"
              element={
                <Container>
                  <NavBar />
                  <ContentBox>
                    <EditPage />
                  </ContentBox>
                  <Footer />
                </Container>
              }
            />
            <Route
              path="/register"
              element={
                <Container>
                  <NavBar />
                  <ContentBox>
                    <RegisterPage />
                  </ContentBox>
                  <Footer />
                </Container>
              }
            />
            <Route
              path="/profileedit"
              element={
                <Container>
                  <NavBar />
                  <ContentBox>
                    <ProfileEditPage />
                  </ContentBox>
                  <Footer />
                </Container>
              }
            />
            <Route
              path="/profile/:id"
              element={
                <Container>
                  <NavBar />
                  <ContentBox>
                    <ProfilePage />
                  </ContentBox>
                  <Footer />
                </Container>
              }
            />
            {/* 렌더링에 NavBar와 Footer 제외 */}
            <Route path="/login" exact={true} element={<LoginPage />} />

            {/* NotFound 페이지 */}
            <Route path="*" exact={true} element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
