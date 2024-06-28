import React, { useState } from 'react';

function Search({ addCard }) {
  const [username, setUsername] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    addCard(username); 
    setUsername('');
  };

  return (
    <div className='bg-mgray'>
      <nav className=' flex p-4 justify-between'>
        <div>
          <img className='rounded-full border-4 border-white'
          src={localStorage.getItem('profileImage')} alt="Profile" width="60" height="60" />
        </div>
        <div className='text-dgray p-4 text-2xl font-bold'>
          GitHub Profile Viewer
        </div>
      </nav>
      <div className='m-4 p-4 justify-center text-center'>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="GitHub username ..."
            className='rounded-lg mx-2 p-2'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit" className=' bg-dgray font-semibold hover: text-white p-2 rounded-lg'>Search</button>
        </form>
      </div>
    </div>
  );
}

export default Search;
