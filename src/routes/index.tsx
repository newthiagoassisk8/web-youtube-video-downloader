import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Home } from "../pages/Home/Home";
import { VideoDetails } from "../pages/VideoDetails/VideoDetails";
import { VideoHistory } from "../pages/History/History";
import Scheduler from "../pages/Scheduler/Scheduler";
import PrivateRoute from "./PrivateRoute";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/video-details" element={<VideoDetails />} />
      <Route
        path="/history"
        element={
          <PrivateRoute>
            <VideoHistory />
          </PrivateRoute>
        }
      />
      <Route path="/schedule" element={<Scheduler />} />
    </Routes>
  );
};
