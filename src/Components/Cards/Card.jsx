import React from 'react';
import './Card.css'; 

function Card ({  name, items, onButtonClick  }) {

    const calculateColor = (age) => {
        if (age <= 18) {
          return 'green';
        } else if (age <= 30) {
          return 'orange';
        } else {
          return 'red';
        }
      };
    
      // Get the age from the items (assuming 'Age' is one of the keys)
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
        <button style={{backgroundColor:'red'}}onClick={() => onButtonClick('Button 1')}>Button 1</button>
        <button onClick={() => onButtonClick('Button 2')}>Button 2</button>
        <button onClick={() => onButtonClick('Button 3')}>Button 3</button>
      </div>
    </div>
  );
};

export default Card;
