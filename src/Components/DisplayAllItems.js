import { useState, useEffect } from 'react';
import axios from 'axios';
import pizzas from '../data';
import "./Pizzacard.css"

const DisplayItems = () => {
  const [items, setItems] = useState([]);
   
  useEffect(() => {
    // axios.get('http://localhost:5000/items')
    //   .then(response => setItems(response.data))
    //   .catch(error => console.error('Error fetching data:', error));
    setItems(pizzas);  
    console.log(items)


    }
  , 
  [items]);

  return (
    <div>
      <h2>Menu</h2>
      <div className="pizza-container">
            {items.map(pizza => (
                <div className="pizza-card" key={pizza.id}>
                    <img src={pizza.image} alt={pizza.name} className="pizza-image" />
                    <h2>{pizza.name}</h2>
                    <p>Price: ${pizza.price}</p>
                    <p>Size: {pizza.size}</p>
                    <p>Category: {pizza.category}</p>
                    <p>{pizza.description}</p>
                </div>
            ))}
      </div>
      {/* <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}: ${item.price}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default DisplayItems;