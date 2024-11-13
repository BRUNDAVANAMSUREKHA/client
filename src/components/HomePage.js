// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { fetchProducts, fetchStates } from '../api';
import StateProductCard from '../components/StateProductCard';
import DataTable from '../components/DataTable';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';

const HomePage = () => {
  const [productData, setProductData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const products = await fetchProducts();
        setProductData(products);
        const states = await fetchStates();
        setStateData(states);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    // Implementing search and filter functionality
    const filteredProducts = productData.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterData(filteredProducts);
  }, [searchTerm, productData]);

  return (
    <div className="home-page">
      <h1>Welcome to the Product Import Dashboard</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterBar />
      <div className="product-cards">
        {stateData.map(state => (
          <StateProductCard key={state.id} state={state} />
        ))}
      </div>
      <h2>Product Import Statistics</h2>
      <DataTable data={filterData} />
    </div>
  );
};

export default HomePage;
