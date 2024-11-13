// StatePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const fetchStates = async () => {
  const response = await axios.get(`${API_URL}/states`);
  return response.data;
};

function StatePage() {
  const [stateData, setStateData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const states = await fetchStates();
        setStateData(states);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching states:', error);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <h2>Loading states...</h2>;
  }

  return (
    <div>
      <h2>States</h2>
      {stateData.length === 0 ? (
        <p>No states available.</p>
      ) : (
        <ul>
          {stateData.map((state) => (
            <li key={state._id}>
              <Link to={`/state/${state._id}`}>{state.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StatePage;
