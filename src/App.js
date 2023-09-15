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
  const [cards, setCards] = useState(cardData);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleAddCard = (formData) => {
    const newCard = {
      id: cards.length + 1,
      name: formData.name,
      namePlay: formData.age,
      items: [
        { Age: formData.age },
        { 'Date of Birth': formData.dob },
        { Gender: formData.gender },
        { 'Favorite Foods': formData.favoriteFoods },
      ],
    };

    setCards([...cards, newCard]);
  };
  const handleDeleteCard = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  const handleViewModal = (id) => {
    const card = cards.find((card) => card.id === id);
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const handleEditCard = (id) => {
    const cardIndex = cards.findIndex((card) => card.id === id);
    setSelectedCard(cards[cardIndex]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="App">
    <Navbar/>
    <Add/>
    <div className="card-container">
        {cardData.map((card) => (
          <Card style={{}}
          id={card.id}
          key={card.id}
          name={card.name}
          items={card.items}
          onDelete={handleDeleteCard}
            onViewModal={handleViewModal}
            onEdit={handleEditCard}
          />
        ))}
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal} onAddCard={handleAddCard} initialFormData={selectedCard}/>
      )}
    </div>
  );
}

export default App;
