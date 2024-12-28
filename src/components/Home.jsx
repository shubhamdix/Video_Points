//import React from 'react';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../App';

function Home() {
  const videos = [
    { id: 1, title: 'Video 1' },
    { id: 2, title: 'Video 2' },
    
  ];

  const { id } = useParams();
  const { user, setUser } = useContext(UserContext);

  const handleWatch = () => {
    setUser(prev => ({
      points: prev.points + 5,
      videosWatched: prev.videosWatched + 1,
    }));
    alert(`You earned 5 points! Total points: ${user.points + 5}`);
  };

  return (
    <div className="container">
    <div>
      <h1>Video List</h1>
      <div className='video-link-box'>
      {videos.map(video => (
        <div className='video-links'  key={video.id}>
          <Link className='video-link-btn'  to={`/video/${video.id}`} onClick={handleWatch}>{video.title}</Link>
          
        </div>
      ))}
      </div>
      <div className='profile-btn-box'>
      <Link className='profile-btn'  to="/profile">Go to Profile</Link>
      </div>
    </div>
    </div>
  );
}

export default Home;
