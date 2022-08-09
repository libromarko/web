import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import shallow from "zustand/shallow";
import { authStateSelector } from "../store/authStoreSelector";

function Login() {
  const authState = useAuthStore(authStateSelector, shallow);
  const { user: loggedUser, status, error, login } = authState;

  const [user, setUser] = React.useState("");
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  if (loggedUser) return <Navigate to="/home" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user);
    setUser("");
  };

  const handleChange = (e) => setUser(e.target.value);

  return (
    <div>
      <ul>
        <li>Usernames other than "foo" returns an error.</li>
        <li>Each request takes 2 seconds and fires a spinner.</li>
        <li>After successful login, page is redirected to "Dashboard"</li>
      </ul>
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
          <button className="login-button" type="submit">
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
