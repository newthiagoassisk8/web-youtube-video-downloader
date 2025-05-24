import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { VideoDetails } from "./pages/VideoDetails/VideoDetails";
import { VideoHistory } from "./pages/History/History";
import Scheduler from "./pages/Scheduler/Scheduler";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video-details" element={<VideoDetails />} />
        <Route path="/history" element={<VideoHistory />} />
        <Route path="/schedule" element={<Scheduler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
