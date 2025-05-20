import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { VideoDetails } from './pages/VideoDetails/VideoDetails';
import { VideoHistory } from './pages/History/History';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video-details" element={<VideoDetails />} />
        <Route path="/history" element={<VideoHistory />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
