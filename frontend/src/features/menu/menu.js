import React, { useState, useEffect } from 'react';
import '../../assests/css/menu.css'
import { fetchMenuItems } from '../../api'; // Import your fetch function

function Menu() {
  const [menuItems, setMenuItems] = useState([]); // Updated variable name to 'menuItems'

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchMenuItems();
        setMenuItems(data);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <section className="align-items-center d-flex justify-content-center menu">
      <ul className='text-center w-75'>
        {menuItems.map((menuItem, index) => ( // Updated variable name to 'menuItems'
          <li key={index}>
            {menuItem.item} - {menuItem.price}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Menu;
