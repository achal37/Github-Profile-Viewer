import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const [username, setUsername] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUsername={setUsername} />} />
        <Route path="/home" element={<Home username={username} />} />
      </Routes>
    </Router>
  );
}

export default App;
