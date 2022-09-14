import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { deepPurple } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import routes from "./routes/routes";
import AppBarComponent from "./components/AppBar";
import FooterComponent from "./components/Footer";
import BackdropLoading from "./components/BackdropLoading";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: deepPurple[900],
    },
  },
});

const LoginPage = lazy(() => import("./pages/Login"));
const SignupPage = lazy(() => import("./pages/Signup"));
const LandingPage = lazy(() => import("./pages/Landing"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));
const NewsPage = lazy(() => import("./pages/News"));
const NewsItemPage = lazy(() => import("./pages/NewsItem"));
const SharedGroupPage = lazy(() => import("./pages/SharedGroup"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicy"));
const AppPrivacyPolicyPage = lazy(() => import("./pages/AppPrivacyPolicy")); 
const ActivationPage = lazy(() => import("./pages/Activation"));

function App() {
  const { isAuthenticated, user } = useSelector((state) => {
    return state.auth;
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Suspense fallback={<BackdropLoading />}>
          <AppBarComponent isAuthenticated={isAuthenticated} user={user} />
          <Routes>
            <Route path="/shared/:id" element={<SharedGroupPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/app-privacy-policy" element={<AppPrivacyPolicyPage />} />
            <Route path="/activation/:id" element={<ActivationPage />} />
            <Route
              path="/"
              element={<PublicRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/news/:newsId" element={<NewsItemPage />} />
            </Route>
            <Route
              path="/"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              {routes.map(({ component: Component, path, exact }) => (
                <Route
                  path={`/${path}`}
                  key={path}
                  exact={exact}
                  element={<Component user={user} />}
                />
              ))}
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <FooterComponent />
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
