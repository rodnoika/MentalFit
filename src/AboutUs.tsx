import React from 'react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1><strong>О Нас</strong></h1>
      </header>
      <div className='home-button'>
        Домой
      </div>
      <section className="about-content">
        <div className="about-text">
          <h2>С MentalFit мысли в цвете, <br/> стресс уходит —— нету следа! </h2>
          <ul>
            <li>Мы ради видеть вас на нашей платформе, созданной для поддержки вашего <strong>ментального здоровья и умственного развития</strong> </li>
            <li>MentalFit — это платформа, использующая ИИ для персонализаций задач по математике, логики, стереометрий, и памяти, а так же предлагающая игры на внимательность и другие тренировки. Мы предоставляем разнобразные ресурсы и функции, включая медитации для снятия стресса, рекомендации по питанию и физические упражнения для общего благополучия, а также чат для общения и нахождения друзей </li>
            <li><strong>Наша цель</strong> — поддерживать ментальное здоровье и развивать когнитивные способности, учитывая ваши индивидуальные потребности</li>
          </ul>
          <div className='button'>
            Перейти к чтениям статьей о ментальном здоровье
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
