import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { AuthProvider } from "./contexts/AuthContext";
import { AppRoutes } from "./routes";

function App() {

    return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );

}

export default App;
