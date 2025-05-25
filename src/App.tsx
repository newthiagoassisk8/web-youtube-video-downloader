import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { VideoDetails } from "./pages/VideoDetails/VideoDetails";
import { VideoHistory } from "./pages/History/History";
import Scheduler from "./pages/Scheduler/Scheduler";
import Header from "./components/Header";
import { AuthProvider } from "./contexts/AuthContext";
import { Login } from "./pages/Login/Login"; // Importar Login se necessário, mas não usado diretamente aqui
function App() {

  //alterar o routes para funcionar desacoplado do app src/routes

  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/video-details" element={<VideoDetails />} />
          <Route path="/history" element={<VideoHistory />} />
          <Route path="/schedule" element={<Scheduler />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
