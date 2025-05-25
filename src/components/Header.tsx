import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext"
import './styles.css';

const Header: React.FC = () => {
    const { user, logout } = useAuth();
    const handleLogout = () => {
        logout();
        alert("Logout realizado com sucesso!");
    }
    return (
        <header className='header'>
            <h1>Bem vindo, {user ? user.name : "Visitante"}</h1>
            <nav className='nav'>
                <Link to="/" className='link'>Home</Link>
                <Link to="/videoDetails" className='link'>Detalhes do Vídeo</Link>
                <Link to="/history" className='link'>Histórico</Link>
                <Link to="/schedule" className='link'>Formulário</Link>
            </nav>
            <button className='logout-button' onClick={handleLogout}>
                Sair
            </button>
        </header>
    );
};


export default Header;
