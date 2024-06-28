import React from 'react';
import { useState, useEffect } from 'react';
import { Octokit } from "octokit";

//uncomment the below line and add your token
//const octokit = new Octokit({ auth: 'Your_Github_Token_Here' });

function Cards({ username, deleteCard }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await octokit.request('GET /users/{username}', { username: username });
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (username) {
      fetchUserData();
    }
  }, [username]);

  if (!userData) {
    return null; // Render nothing while data is being fetched
  }

  return (
    <div className="bg-mgray font-semibold m-2 p-4 border-2 border-white rounded-lg shadow-md">
      <div className='flex items-center'>
        <div className="mr-4">
          <img src={userData.avatar_url} alt="Profile" className="rounded-full" width="80" height="80" />
        </div>
        <div>
          <p className="text-lg font-semibold">Username: {userData.login || '---'}</p>
          <p>Name: {userData.name || '---'}</p>
          <p>Twitter: {userData.twitter_username || '---'}</p>
          <p>Public Repos: {userData.public_repos ?? '---'}</p>
          <p>Followers: {userData.followers ?? '---'}</p>
          <p>Following: {userData.following ?? '---'}</p>
          <p>Created at: {userData.created_at ? new Date(userData.created_at).toLocaleDateString() : '---'}</p>
          <p>Location: {userData.location || '---'}</p>
          <div className="inline-block mt-2">
            <button className='bg-lgray p-2 me-4 rounded-full font-semibold hover:border-2 border-yellow'>
              Visit Profile
            </button>
            <button className='bg-lgray p-2 hover:font-semibold rounded-full hover:border-2 border-yellow' onClick={deleteCard}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
