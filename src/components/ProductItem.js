import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct, updateProduct } from '../redux/actions';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));  // Dispatch delete action
  };

  const handleUpdate = (id) => {
    const updatedData = {
      // New data you want to update, e.g., changing the price or title
      title: 'Updated Title',
      price: 10.99,
    };
    dispatch(updateProduct(id, updatedData));  // Dispatch update action
  };

  console.log('Rendering product:', product);  // Log the product being rendered

  return (
    <div className="product-item">
      <img src={product.image} alt={product.title} style={{ height: '200px' }} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={() => handleDelete(product.id)}>Delete</button>
      <button onClick={() => handleUpdate(product.id)}>Update</button>
    </div>
  );
};

export default ProductItem;
