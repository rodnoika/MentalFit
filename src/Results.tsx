import React from 'react';
import './Results.css';

interface ResultItem {
  category: string;
  score: string;
}

const results: ResultItem[] = [
  {
    category: 'Математика',
    score: '80%',
  },
  {
    category: 'Логика',
    score: '80%',
  },
  {
    category: 'Стереометрия',
    score: '80%',
  },
  {
    category: 'Мнемотехника',
    score: '80%',
  },
  {
    category: 'Игры на внимательность',
    score: '80%',
  },
  {
    category: 'Быстрые игры',
    score: '80%',
  },
];

const Results: React.FC = () => {
  return (
    <div className="results-container">
      <h1 className='Head'>Результаты</h1>
      <div className='home-button'>
        Домой
      </div>
      <div className="results-content">
        {results.map((result, index) => (
          <div key={index} className="result-item">
            <div className="circle" />
            <div className="result-details">
              <h2 className="category">{result.category}</h2>
              <h2 className="score">{result.score}</h2>
            </div>
            <hr className="separator" />
          </div>
        ))}
      </div>
      <button className="action-button">Получить рекомендации от ИИ помощника</button>
    </div>
  );
};

export default Results;
