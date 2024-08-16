import React from 'react';
import './JoinDiscord.css';

const DiscordJoinPage: React.FC = () => {
    return (
    <>
        <div className='home-button'>
            Домой
        </div>
        <div className="discord-join-page">
            <h1 className="page-title">Присоединяйтесь к нашему серверу Discord!</h1>
            <ul className="info-list">
            <li>Общение с участниками и обмен опытом.</li>
            <li>Поддержка и помощь от нашей команды.</li>
            <li>Участие в мероприятиях и конкурсах.</li>
            <li>Получение актуальных обновлений и новостей.</li>
            <li>Доступ к закрытым каналам и ресурсам.</li>
            </ul>
            <a
            href="" 
            target="_blank"
            rel="noopener noreferrer"
            className="join-button"
            >
            Присоединиться к серверу
            </a>
        </div>
    </>
    );
  };

export default DiscordJoinPage;
