import React from 'react';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <h1>Welcome to the E-Commerce Store</h1>
      <ProductList />
      <Footer />
    </div>
  );
};

export default HomePage;
