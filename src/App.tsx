import React from 'react';
import Navbar from './Navbar';
import Central from './Central';
import './App.css'; 

const App: React.FC = () => {
  return (
    <div className='background'>
      <Navbar/>
      <Central/>
    </div>
  );
}

export default App;
