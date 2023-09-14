import React, { useState } from 'react';
import './App.css';
import Add from './Components/Add/Add';
import Card from './Components/Cards/Card';
import Modal from './Components/Modal/Modal';
import Navbar from './Components/Navbar/Navbar';

const cardData = [
  {
    id: 1,
    name: 'John Doe',
    namePlay: 'Playing guitar',
    items: [{ Age: 18 }, { Location: 'New York' }, { Hobby: 'Reading' }],
  },
  {
    id: 2,
    name: 'Jane Smith',
    namePlay: 'Playing piano',
    items: [{ Age: 25 }, { Location: 'Los Angeles' }, { Hobby: 'Painting' }],
  },
  {
    id: 3,
    name: 'Alice Johnson',
    namePlay: 'Painting',
    items: [{ Age: 30 }, { Location: 'Chicago' }, { Hobby: 'Singing' }],
  },
  // Add more card data objects as needed
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (buttonText) => {
    if (buttonText === 'Button 1') {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="App">
    <Navbar/>
    <Add/>
    <div className="card-container">
        {cardData.map((card) => (
          <Card
          key={card.id}
          name={card.name}
          items={card.items}
          onButtonClick={handleButtonClick}
          />
        ))}
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}/>
      )}
    </div>
  );
}

export default App;
