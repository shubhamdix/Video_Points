import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Home from './components/Home';
import VideoPlayer from './components/VideoPlayer';
import Profile from './components/Profile';
import './App.css';

// Create a User Context
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ points: 0, videosWatched: 0 });

  return (

    
      
    

    <UserContext.Provider value={{ user, setUser }}>
      <Router>

      <nav>
      <Link to='/' className='text'>Home</Link>
      <Link to='/video/:id' className='text'>VideoPlayer</Link>
      <Link to='/profile' className='text'>Profile</Link>
    </nav>
    
    <div className="container">

      <Routes>
          <Route exact path='/' Component={Home}/>
    </Routes>
    <Routes>
          <Route exact path='/video/:id' Component={VideoPlayer}/>
    </Routes>
    <Routes>
          <Route exact path='/profile' Component={Profile}/>
    </Routes>

    </div>
        {/*<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<VideoPlayer />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>*/}
      </Router>
    </UserContext.Provider>

    
  );
}

export default App;
