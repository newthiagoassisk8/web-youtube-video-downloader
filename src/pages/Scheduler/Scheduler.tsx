import React, { useState } from "react";

interface DownloadForm {
  url: string;
  schedule: string;
}

const ScheduleDownload: React.FC = () => {
  const [formData, setFormData] = useState<DownloadForm>({
    url: "",
    schedule: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    /*  Sem o preventDefault: O navegador envia o formulário e recarrega a página.
     O React perde o controle do estado (useState),
      e não dá para interceptar o envio de forma programada. */
    e.preventDefault();

    try {
      // TODO: Atualizar api em python para aceitar o agendamento
      const response = await fetch("http://endpointaindanaocriado/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Download agendado com sucesso!");
      } else {
        setMessage("Erro ao agendar o download.");
      }
    } catch (err) {
      setMessage("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "auto" }}>
      <h2>Agendar Download</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID do vídeo:</label>
          <br />
          <input
            type="text"
            name="url"
            value={formData.url}
            onChange={handleChange}
            required
            style={{ width: "100%", marginBottom: "1rem" }}
          />
        </div>
        <div>
          <label>Data e hora:</label>
          <br />
          <input
            type="datetime-local"
            name="schedule"
            value={formData.schedule}
            onChange={handleChange}
            required
            style={{ width: "100%", marginBottom: "1rem" }}
          />
        </div>
        <button type="submit">Agendar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ScheduleDownload;
