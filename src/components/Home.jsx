// components/Home.jsx
import React, { useState, useEffect } from 'react';
import { FiGithub } from 'react-icons/fi';
import { MdDelete } from "react-icons/md";
import Search from './Search';
import Cards from './Card';

function Home() {
  const [cards, setCards] = useState(() => {
    const savedCards = localStorage.getItem('cards');
    return savedCards ? JSON.parse(savedCards) : [];
  });

  const [myProfileUsername, setMyProfileUsername] = useState(localStorage.getItem('username'));

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  const addCard = (username) => {
    if (!cards.includes(username)) {
      setCards([...cards, username]);
    }
  };

  const deleteCard = (index) => {
    const newCards = [...cards];
    newCards.splice(index, 1);
    setCards(newCards);
  };

  const deleteAllCards = () => {
    setCards([]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray">
      <Search addCard={addCard} />
      <div className="flex justify-between items-center mb-4 mx-2 px-4">
        <div className="inline-block m-2 text-2xl p-4 rounded-lg hover:border-2 border-white bg-lgray">
            <MdDelete onClick={() => deleteAllCards()}/>
        </div>
        <button className="p-3 m-2 hover:border-2 border-white bg-lgray" onClick={() => addCard(myProfileUsername)}>
            Show My Profile
          </button>
      </div>
      <div className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
          {cards.map((username, index) => (
            <div key={index} className="w-full">
              <Cards username={username} deleteCard={() => deleteCard(index)} />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-500 text-white font-bold text-center border-2 border-white m-2 py-4">
        Created by - <a className='hover:font-bold' href="https://github.com/achal37">
          <FiGithub className="inline-block mb-1" />Achal</a>
      </div>
    </div>
  );
}

export default Home;
