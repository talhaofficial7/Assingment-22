// Action types
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

// Action to fetch products from an API
export const fetchProducts = (products) => {
  console.log('Dispatching Fetch Products Action:', products);  // Debug log to check fetched data
  return {
    type: FETCH_PRODUCTS,
    payload: products,  // Products data fetched from API
  };
};

// Action to delete a product by its ID
export const deleteProduct = (id) => {
  console.log('Dispatching Delete Product Action for ID:', id);  // Debug log to check deleted ID
  return {
    type: DELETE_PRODUCT,
    payload: id,  // Product ID to be deleted
  };
};

// Action to update a product's details by its ID
export const updateProduct = (id, updatedData) => {
  console.log('Dispatching Update Product Action for ID:', id, updatedData);  // Debug log to check updated data
  return {
    type: UPDATE_PRODUCT,
    payload: {
      id,          // Product ID to be updated
      updatedData  // Updated data (title, price, etc.)
    },
  };
};
