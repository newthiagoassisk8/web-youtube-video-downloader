import { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [url, setVideoUrl] = useState<string>("");
  const [isLoading, setisLoading] = useState(false);
  const [errMsg, setErrMsg] = useState<string>("");
  const [progress, setProgress] = useState(0);

  const navigate = useNavigate();

  function fakeProgress() {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 10;
      if (p >= 95) {
        clearInterval(interval);
      }
      setProgress(Math.min(p, 73));
    }, 300);
    return interval;
  }

  function extractYouTubeVideoId(url: string): {
    videoId: string | null;
    isValid: boolean;
  } {
    const regex = /(?:youtube\.com\/.*v=|youtu\.be\/)([^&#?\s]+)/;
    const match = url.match(regex);

    if (match && match[1]) {
      return { videoId: match[1], isValid: true };
    }

    return { videoId: null, isValid: false };
  }

  async function handleSubmit() {
    try {
      const result = extractYouTubeVideoId(url);
      if (!result.isValid) {
        setErrMsg("Por favor, insira um link válido do YouTube.");
        return;
      }
      setisLoading(true);
      setProgress(0);

      if (!result.videoId) return; //se não for um ID válido, não faz nada
      const trimmedID = result.videoId.trim();
      let interval = fakeProgress();

      const response = await fetch(`http://192.168.0.27:8000/download`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: trimmedID }),
      });

      if (!response.ok) {
        throw new Error("Erro ao baixar o vídeo");
      }
      clearInterval(interval);
      setProgress(100);
      const data = await response.json();

      if (data && data.title) {
        const history = JSON.parse(
          localStorage.getItem("downloadHistory") || "[]"
        );
        const newVideo = {
          title: data.title,
          downloadedAt: new Date().toISOString(),
        };
        localStorage.setItem(
          "downloadHistory",
          JSON.stringify([...history, newVideo])
        );
      }

      navigate("/video-details", { state: { video: data } });

      return data;
    } catch (error) {
      const errMsg = "Erro ao enviar comando: " + error;
      alert(errMsg);
    } finally {
      setisLoading(false);
    }
  }

  return (
    <div className="container">
      <h1>Youtube Client</h1>

      <div className="input-group">
        {!isLoading && (
          <input
            type="text"
            value={url}
            placeholder="Insira o link do vídeo do youtube"
            onChange={(e) => setVideoUrl(e.target.value)}
          />
        )}

        {!isLoading && <button onClick={handleSubmit}>Baixar</button>}
        {!isLoading && <p>{errMsg}</p>}

        {isLoading && (
          <div style={{ marginTop: "1rem" }}>
            <p>Baixando... {Math.round(progress)}%</p>

            <div
              style={{
                background: "#eee",
                height: "10px",
                borderRadius: "5px",
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  background: "#4caf50",
                  height: "100%",
                  borderRadius: "5px",
                  transition: "width 0.3s ease",
                }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
