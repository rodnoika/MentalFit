import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {

    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li className="navbar-item">Профиль</li>                
                <li className="navbar-item">О нас</li>
                <li className="navbar-item">Тренировка</li>
                <li className="navbar-item">ИИ помощник</li>
                <li className="navbar-item">Напоминания</li>
                <li className="navbar-item">Друзья</li>
            </ul>
        </nav>
    );
}

export default Navbar;
