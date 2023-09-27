import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000'; // Replace with your Django backend URL

// Fetch menu items
export async function fetchMenuItems() {
  try {
    const response = await axios.get(`${API_BASE_URL}/menu/menuitems/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching menu items:', error);
    throw error;
  }
}