import React, { useState } from 'react';
import './App.css';

function App() {
  const [videoId, setVideoID] = useState<string>('')
  const [isLoading, setisLoading] = useState(false)

  async function handleSubmit() {
    try {
      setisLoading(true)
      const trimmedID = videoId.trim()
      if (!trimmedID) return;

      const response = await fetch(`http://192.168.0.27:8000/download`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: trimmedID }),
      });

      const data = await response.json();


    } catch (error) {
      const errMsg = "Erro ao enviar comando: " + error;
      alert(errMsg)

    } finally {
      setisLoading(false)

    }

  }

  return (
    <div className="container">
      <h1>Youtube Client</h1>
      <div className="input-group">
        <input
          type='text'
          placeholder='Insira o ID do vídeo'
          value={videoId}
          onChange={(e) => setVideoID(e.target.value)}
        />
        <button onClick={handleSubmit}></button>
      </div>
    </div>
  );
}

export default App;
