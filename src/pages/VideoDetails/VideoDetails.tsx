import "./styles.css";
import { useLocation, Navigate } from "react-router-dom";

type VideoInfo = {
  title: string;
  expires_in_minutes: number;
  download_url: string;
};

export function VideoDetails() {
  const location = useLocation();
  const video = (location.state as { video: VideoInfo })?.video;
  if (!video) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container">
      <h2>Vídeo a ser baixado</h2>
      <div className="card">
        <strong>{video.title}</strong>
        <p>URL expira em {video.expires_in_minutes} minutos</p>
        <a href={video.download_url} target="_blank" rel="noopener noreferrer">
          {video.download_url}
        </a>
        <div className="loader" />
      </div>
    </div>
  );
}
