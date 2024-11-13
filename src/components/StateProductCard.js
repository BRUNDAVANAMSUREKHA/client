// src/components/StateProductCard.js
import React from 'react';
import { motion } from 'framer-motion';

const StateProductCard = ({ data }) => {
  return (
    <div className="card-container">
      {data.map((product) => (
        <motion.div
          key={product._id}
          className="card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>{product.name}</h3>
          <p>{product.type}</p>
          <p>Value: ${product.value}</p>
          <p>Quality: {product.quality}</p>
          <p>Imported From: {product.country}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default StateProductCard;
