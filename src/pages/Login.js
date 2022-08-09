import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState, useAuthDispatch, login } from "../contexts/auth/auth-context";

function Login() {
  const { user: loggedUser, status, error } = useAuthState();
  const dispatch = useAuthDispatch();

  const [user, setUser] = React.useState("");
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  if (loggedUser) return <Navigate to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, user);
    setUser("");
  };

  const handleChange = (e) => setUser(e.target.value);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" />
          <input
            ref={inputRef}
            type="text"
            name="name"
            id="name"
            placeholder="Enter username"
            value={user}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <button type="submit">
            Login
          </button>
        </div>
      </form>
      {status === "rejected" && (
        <p style={{ color: "maroon", marginTop: "10px" }}>Error: {error}</p>
      )}
    </div>
  );
}

export default Login;
