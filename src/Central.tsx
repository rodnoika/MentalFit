import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './Central.css';

const Central: React.FC = () => {
    const [userName, setUserName] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCurrentUser = async () => {
            const token = Cookies.get('access_token'); // Получаем токен из cookies
            if (token) {
                try {
                    const response = await fetch('http://localhost:8000/users/me', {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        },
                    });

                    if (response.ok) {
                        const userData = await response.json();
                        setUserName(userData.name);
                    } else {
                        // Если запрос неудачен, удалите токен и перенаправьте на страницу входа
                        Cookies.remove('access_token');
                        navigate('/Sign-In');
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                    Cookies.remove('access_token');
                    navigate('/Sign-In');
                }
            }
        };

        fetchCurrentUser();
    }, [navigate]);

    return (
        <div className="welcome-container">
            <div className="welcome-text">Добро Пожаловать</div>
            <div className="main-title">
                <span className="mental">Mental</span>
                <span className="fit">Fit</span>
            </div>
            <div className="button-container">
                {userName ? (
                    <div className="welcome-message">С возвращением, {userName}!</div>
                ) : (
                    <>
                        <Link to='/Sign-Up'>
                            <button className="button sign-up">Sign Up</button>
                        </Link>
                        <Link to='/Sign-In'>
                            <button className="button sign-in">Sign In</button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Central;
