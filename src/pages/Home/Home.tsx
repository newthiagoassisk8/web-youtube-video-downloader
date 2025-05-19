import { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export function Home() {
    const [videoId, setVideoID] = useState<string>('')
    const [isLoading, setisLoading] = useState(false)
    const navigate = useNavigate();


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

            if(data && data.title){
                const history = JSON.parse(localStorage.getItem('downloadHistory') ||  '[]');
                const newVideo = {
                    title: data.title,
                    downloadedAt: new Date().toISOString()
                }
                localStorage.setItem('downloadHistory', JSON.stringify([...history, newVideo]));
            }

            navigate('/video-details', { state: { video: data } });

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
