import { useState } from 'react';
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import '../../assets/global.css';

export const Login = () => {
    const { login } = useAuth();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {

            await login(userName, password);
            navigate("/home");
            // alert(`Login realizado com sucesso! Bem-vindo, ${}`);
        } catch (error) {
            alert("Erro ao fazer login. Verifique suas credenciais.");
            console.error("Erro ao fazer login:", error);
        }
    }

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className='flex gap-2 flex-col'>
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
