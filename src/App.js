import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import routes from "./routes/routes";
import AppBarComponent from "./components/AppBar";
import { brown } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: brown[500],
    },
    secondary: {
      main: brown[900],
    }
  },
});

const LoginPage = lazy(() => import("./pages/Login"));
const SignupPage = lazy(() => import("./pages/Signup"));
const LandingPage = lazy(() => import("./pages/Landing"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

function App() {
  const { isAuthenticated } = useSelector((state) => {
    return state.auth;
  });

  console.log("isAuthenticated:", isAuthenticated);

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <AppBarComponent isAuthenticated={isAuthenticated} />
      <Suspense fallback={"loading..."}>
        <Routes>
          <Route
            path="/"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            {routes.map(({ component: Component, path, exact }) => (
              <Route
                path={`/${path}`}
                key={path}
                exact={exact}
                element={<Component />}
              />
            ))}
          </Route>
          <Route
            path="/"
            element={<PublicRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
    </ThemeProvider>
  );
}

export default App;
