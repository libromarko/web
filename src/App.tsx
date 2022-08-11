import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import { routes } from "./routes/routes";

const LoginPage = lazy(() => import("./pages/Login/Login"));
const SignupPage = lazy(() => import("./pages/Signup/Signup"));
const LandingPage = lazy(() => import("./pages/Landing/Landing"));

function App() {
  const isAuthenticated = false;

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/"
            element={<PublicRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>
          <Route
            path="/"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            {routes.map(({ component: Component, path }) => (
              <Route path={`/${path}`} key={path} element={<Component />} />
            ))}
          </Route>
          {/* <Route path="*" element={<NoFoundComponent />} /> */}
          {/* <Route path="/settings" element={<Settings />} /> */}
          {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
