import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header: React.FC = () => {
    return (
        <header className='header'>
            <nav className='nav'>
                <Link to="/" className='link'>Home</Link>
                <Link to="/videoDetails" className='link'>Detalhes do Vídeo</Link>
                <Link to="/history" className='link'>Histórico</Link>
                <Link to="/schedule" className='link'>Formulário</Link>
            </nav>
        </header>
    );
};


export default Header;
