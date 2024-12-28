import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../App';
import { Link } from 'react-router-dom';


function VideoPlayer() {
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
      <h1>Playing Video {id}</h1>
      <video className='vid' width="520" height="240"  controls autoPlay  >
        <source src='/Videos/KUNG FU PANDA 4 _ Official Trailer.mp4'  />
        
      </video>
      {/*<button className='btn' onClick={handleWatch}>Mark as Watch Video</button> */}
      <Link className='back-btn' to="/">Go Back to Home Page</Link>
    </div>
    </div>
  );
}

export default VideoPlayer;
