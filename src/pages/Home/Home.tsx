import { useState } from 'react';
import './styles.css';

export function Home() {
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
            console.log(data)
            return data

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
                    value={videoId}
                    placeholder='Insira o ID do vídeo'
                    onChange={(e) => setVideoID(e.target.value)}

                />
                <button onClick={handleSubmit} disabled={isLoading}>
                    {isLoading ? 'Carregando...' : 'Baixar'}
                </button>

            </div>
        </div>
    );
}
