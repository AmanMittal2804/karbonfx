import React from 'react';
import './Card.css'; 

function Card ({ id, name, items, onDelete, onViewModal, onEdit  }) {

    const calculateColor = (age) => {
        if (age <= 18) {
          return 'green';
        } else if (age <= 30) {
          return 'orange';
        } else {
          return 'red';
        }
      };
      const ageItem = items.find((item) => Object.keys(item)[0] === 'Age');
      const age = ageItem ? Object.values(ageItem)[0] : '';
    
      const color = calculateColor(age); 

  return (
    <div className="card">
      <div className="card-header">{name} <div
          className="color-indicator"
          style={{ backgroundColor: color }}
        ></div> </div>
      <hr></hr>
      <div className="card-items">
        
        <ul>
          {items.map((item, index) => (
            <li key={index}>{Object.keys(item)[0]}: {Object.values(item)[0]}</li>
          ))}
        </ul>
      </div>
      <hr></hr>
      <div className="card-footer">
        <button style={{backgroundColor:'red'}} onClick={() => onDelete(id)}>Delete</button>
          <button onClick={() => onViewModal(id)}>View</button>
          <button onClick={() => onEdit(id)}>Edit</button>
      </div>
    </div>
  );
};

export default Card;
