import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";



interface VideoHistoryItem {
  id: string;
  title: string;
  downloadedAt: string;
}

// criar pagincacao quando o historico ficar muito grande
export function VideoHistory() {
  const [history, setHistory] = useState<VideoHistoryItem[]>([{id:'1',title:'thiago',downloadedAt:'reorek'}]);
  const navigate = useNavigate();
  const [name,setName] = useState<string>('dsds')


  useEffect(() => {
    const stored = localStorage.getItem("downloadHistory");
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  function handleClearHistory() {
    setName("ok")
    // localStorage.removeItem("downloadHistory");
    // setHistory([]);
  }
  return (
    <div className="container">
      <h1>Mudança para teste</h1>

      {history.length === 0 ? (
        <div className="empty-history">
          <p>Nenhum vídeo baixado ainda.</p>
        </div>
      ) : (
        <ul>
          {history.map((video, index) => (
            <li key={index}>
              <strong>{video.title}</strong>
              <br />
              <small>
                Baixado em: {new Date(video.downloadedAt).toLocaleString()}
              </small>
            </li>
          ))}
        </ul>
      )}

      <div style={{ marginTop: "20px" }}>
{/* Se a condição for verdadeira, então mostre o que está dentro dos parênteses. */}

        {history.length > 0 && (
          <button className="buttons" onClick={handleClearHistory}>
            Limpar Histórico
          </button>
        )}
        <button className="buttons" onClick={() => navigate("/")}>
          Voltar para a Home
        </button>




      </div>

    </div>
  );

}
