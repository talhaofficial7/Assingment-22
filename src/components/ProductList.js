import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchProducts } from '../redux/actions';
import ProductItem from './ProductItem';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  // Fetch products when component mounts
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        console.log('Fetched Products:', response.data);  // Check if data is fetched
        dispatch(fetchProducts(response.data));  // Dispatch fetched products to Redux
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, [dispatch]);

  console.log('Products from Redux:', products);  // Log products from Redux state

  return (
    <div className="product-list">
      {products && products.length > 0 ? (
        products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <p>No products available.</p>  // Message when no products are available
      )}
    </div>
  );
};

export default ProductList;
