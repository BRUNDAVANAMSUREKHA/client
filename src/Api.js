import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const fetchStates = async () => {
  const response = await axios.get(`${API_URL}/states`);
  return response.data;
};

export const fetchStateById = async (stateId) => {
  const response = await axios.get(`${API_URL}/states/${stateId}`);
  return response.data;
};

export const fetchProductById = async (productId) => {
  const response = await axios.get(`${API_URL}/products/${productId}`);
  return response.data;
};
