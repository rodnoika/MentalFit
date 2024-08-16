import React, { useEffect, useState } from 'react';
import './Profile.css';
import Cookies from 'js-cookie';

interface UserProfile {
  name: string;
  surname: string;
  profile_picture: string;
  bio: string;
}

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = Cookies.get('access_token');
      if (token) {
        try {
          const response = await fetch('http://localhost:8000/users/me', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }

          const userData = await response.json();
          setUser(userData);
          console.log(userData);
        } catch (err) {
          setError((err as Error).message);
        } finally {
          setLoading(false);
        }
      } else {
        setError('No token found');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      const token = Cookies.get('access_token');
      try {
        const formData = new FormData();
        formData.append('file', selectedFile);

        const response = await fetch('http://localhost:8000/users/me/profile-picture', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Failed to upload profile picture');
        }

        const result = await response.json();
        setUser((prevUser) => prevUser ? { ...prevUser, profilePicture: result.profilePicture } : null);
      } catch (err) {
        setError((err as Error).message);
      }
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!user) return <p>No user data available</p>;

  return (
    <div className="container">
      <div className="profileContent">
        <div className="profileInfo">
          <h1 className="userName">
            Имя: {user.name}<br />Фамилия: {user.surname}
          </h1>
          <div className="problemOverview">
            <h2>Вид проблемы:</h2>
            <p>{user.bio}</p>
          </div>
          <div className="buttonRow">
            <button className="button">Результаты тренировок</button>
            <button className="button">ИИ помощник</button>
            <button className="button">Ваш календарь</button>
            <button className="button">Друзья</button>
          </div>
        </div>
        <div className="profileImage">
          {user.profile_picture ? (
            <img
              src={`data:image/png;base64,${user.profile_picture}`}
              alt={`${user.name}'s profile`}
              className="profilePicture"
            />
          ) : (
            <p>No profile picture</p>
          )}
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleFileUpload}>Upload Profile Picture</button>
        </div>
      </div>
      <div className="logoContainer">
        <img src="src/assets/house.jpg" alt="House Logo" className="logo" />
        <p>Домой</p>
      </div>
    </div>
  );
};

export default ProfilePage;
