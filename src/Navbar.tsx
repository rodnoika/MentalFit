import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li className="navbar-item"><Link to='/Profile'>Профиль</Link></li>
                <li className="navbar-item"><Link to='/AboutUs'>О нас</Link></li>
                <li className="navbar-item"><Link to='/Training'>Тренировка</Link></li>
                <li className="navbar-item"><Link to='/AI-Assistant'>ИИ помощник</Link></li>
                <li className="navbar-item"><Link to='/Reminders'>Напоминания</Link></li>
                <li className="navbar-item"><Link to='/Friends'>Друзья</Link></li>
                <li className="navbar-item"><Link to='/Articles'>Статьи</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
