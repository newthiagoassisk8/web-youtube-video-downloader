import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { VideoDetails } from './pages/VideoDetails/VideoDetails';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<VideoDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
