import React, { useContext } from 'react';
import { UserContext } from '../App';
import { Link } from 'react-router-dom';


function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div className="container">
    <div >
      <h1>User Profile</h1>
      <div className='points-box'>
      <p>Points: {user.points}</p>
      <p>Videos Watched: {user.videosWatched}</p>
      </div>
      <div className='home-btn-box'>
        <Link className='home-btn'  to="/">Go to Home</Link>
      </div>
    </div>
    </div>
  );
}

export default Profile;
