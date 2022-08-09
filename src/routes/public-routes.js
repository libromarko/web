import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./private-route";
import history from "../history";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Spinner from "../components/spinner/spinner";

function PublicRoutes() {
  return (
    <BrowserRouter history={history}>
      {/* <Navbar /> */}
      <Spinner />
      <div className="layout">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default PublicRoutes;
