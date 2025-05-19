import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

interface VideoHistoryItem {
  id: string;
  title: string;
  downloadedAt: string;
}

export function VideoHistory() {
  const [history, setHistory] = useState<VideoHistoryItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("downloadHistory");
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  function handleClearHistory() {
    localStorage.removeItem("downloadHistory");
    setHistory([]);
  }
  return (
    <div className="container">
      <h1>Histórico de Downloads</h1>

      {history.length === 0 ? (
        <p>Nenhum vídeo baixado ainda.</p>
      ) : (
        <ul>
          {history.map((video, index) => (
            <li key={index}>
              <strong>{video.title}</strong>

              <small>
                Baixado em: {new Date(video.downloadedAt).toLocaleString()}
              </small>
            </li>
          ))}
        </ul>
      )}

      <div>
        <button className="buttons" onClick={handleClearHistory}>Limpar histórico</button>
        <button className="buttons" onClick={() => navigate("/")}>Voltar para a Home</button>
      </div>
    </div>
  );
}
