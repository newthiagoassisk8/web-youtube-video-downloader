import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext"
import './styles.css';
import './../assets/global.css';

const Header: React.FC = () => {
    const { user, logout } = useAuth();
    const handleLogout = () => {
        logout();
        alert("Logout realizado com sucesso!");
    }
    return (
        <header className='header gap-2 flex'>
            <span>Bem vindo, {user ? user.name:'Visitante'}</span>
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
