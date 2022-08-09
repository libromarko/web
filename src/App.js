import { AuthProvider } from "./contexts/auth/auth-context";
import PublicRoutes from "./routes/public-routes";

function App() {
  return (
    <AuthProvider>
      <PublicRoutes />
    </AuthProvider>
  );
}

export default App;
