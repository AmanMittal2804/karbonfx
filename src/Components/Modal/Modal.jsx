import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    dob: '',
    gender: '',
    favoriteFoods: ['Pizza', 'Burger', 'Salad'],
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddFavoriteFood = () => {
    setFormData({
      ...formData,
      favoriteFoods: [...formData.favoriteFoods, ''],
    });
  };

  const handleFavoriteFoodChange = (index, value) => {
    const updatedFavoriteFoods = [...formData.favoriteFoods];
    updatedFavoriteFoods[index] = value;
    setFormData({
      ...formData,
      favoriteFoods: updatedFavoriteFoods,
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <div className="modal-form">
          <h2>Modal Content</h2>
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleFormChange}
              />
            </label>
            <label>
              Date of Birth (Calendar):
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleFormChange}
              />
            </label>
            <label>
              Gender:
              <select
                name="gender"
                value={formData.gender}
                onChange={handleFormChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label>
              Favorite Foods:
              <ul>
                {formData.favoriteFoods.map((food, index) => (
                  <li key={index}>
                    <input
                      type="text"
                      value={food}
                      onChange={(e) =>
                        handleFavoriteFoodChange(index, e.target.value)
                      }
                    />
                  </li>
                ))}
              </ul>
              <button type="button" onClick={handleAddFavoriteFood}>
                Add Favorite Food
              </button>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
