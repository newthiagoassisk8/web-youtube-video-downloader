import { useState } from 'react';
import { useAuth } from "../../contexts/AuthContext";

export const Login = () => {
    const { login } = useAuth();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(userName, password);
            alert("Login realizado com sucesso!");
        } catch (error) {
            alert("Erro ao fazer login. Verifique suas credenciais.");
            console.error("Erro ao fazer login:", error);
        }
    }

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        value={userName}
                        placeholder="Usuário"
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <input
                        type="password"
                        value={password}
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}