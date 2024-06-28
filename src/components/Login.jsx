// components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setUsername }) {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.github.com/users/${input}`);
      if (!response.ok) {
        throw new Error('User not found');
      }
      const userData = await response.json();
      setUsername(input);

      // Store the profile image URL and username in localStorage
      localStorage.setItem('profileImage', userData.avatar_url);
      localStorage.setItem('username', input);

      navigate('/home');
    } catch (error) {
      console.error('Error fetching GitHub user data:', error);
      // Handle error state or display error message to the user
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray text-center px-4">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-white mb-4">Enter your GitHub</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="GitHub Username" 
            className="p-2 rounded w-full"
            required 
          />
          <button type="submit" className="px-4 py-2 bg-dgray font-semibold text-white rounded">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
