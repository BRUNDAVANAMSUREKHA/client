// StateDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const fetchStateDetails = async (id) => {
  const response = await axios.get(`${API_URL}/states/${id}`);
  return response.data;
};

function StateDetails() {
  const { id } = useParams(); // Get the state ID from the URL
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const stateDetails = await fetchStateDetails(id);
        setState(stateDetails);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching state details:', error);
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  if (loading) {
    return <h2>Loading state details...</h2>;
  }

  if (!state) {
    return <h2>State not found.</h2>;
  }

  return (
    <div>
      <h2>State Details</h2>
      <p><strong>Name:</strong> {state.name}</p>
      <p><strong>Population:</strong> {state.population}</p>
      <p><strong>Capital:</strong> {state.capital}</p>
      <p><strong>Area:</strong> {state.area} sq km</p>
      {/* Add other state details here */}
    </div>
  );
}

export default StateDetails;
