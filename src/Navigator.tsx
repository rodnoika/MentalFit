import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpPage from './Sign-up';
import SignInPage from './Sign-in';
import DiscordJoinPage from './JoinDiscord';
import TrainingPage from './TrainingPage';
import App from './App';
import ArticlesPage from './ArticlesPage';
import Results from './Results';
import AboutUs from './AboutUs';
import ProfilePage from './Profile';

const Navigator: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path='/Sign-Up' element={<SignUpPage />} />
                <Route path='/Sign-In' element={<SignInPage />} />
                <Route path='/Friends' element={<DiscordJoinPage />} />
                <Route path='/Training' element={<TrainingPage />} />
                <Route path='/Articles' element={<ArticlesPage />} />
                <Route path='/Training/Results' element={<Results />} />
                <Route path='/AboutUs' element={<AboutUs />} />
                <Route path='/Profile' element={<ProfilePage />} />
            </Routes>
        </Router>
    );
}

export default Navigator;
