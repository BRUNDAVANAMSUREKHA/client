import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

function ProductDetails() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const products = await fetchProducts();
        setProductData(products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  return (
    <div>
      <h2>Products</h2>
      {productData.length === 0 ? (
        <p>No products available.</p>
      ) : (
        productData.map((product) => (
          <div key={product._id} className="card">
            <h3>{product.name}</h3>
            {/* Add more details here */}
          </div>
        ))
      )}
    </div>
  );
}

export default ProductDetails;
