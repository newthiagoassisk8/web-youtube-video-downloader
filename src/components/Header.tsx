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
        <header className='header gap-2 flex'>
            <div>
                <span>Bem vindo, {user ? user.name : "Visitante"}</span>
            </div>
            <nav className='flex gap-2'>
                <Link to="/" className='link'>Home</Link>
                <Link to="/history" className='link'>Histórico</Link>
                <Link to="/schedule" className='link'>Formulário</Link>
            </nav>
            {user && (
                <div className='gap-1 flex'>
                <button className='logout-button' onClick={handleLogout}>
                Sair
                </button>
            </div>
            )

            }

        </header>
    );
};


export default Header;
