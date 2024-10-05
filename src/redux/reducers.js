const initialState = {
    products: [],
  };
  
  const productReducer = (state = initialState, action) => {
    console.log('Action received by reducer:', action);  // Log the incoming action
    switch (action.type) {
      case 'FETCH_PRODUCTS':
        console.log('Updating state with products:', action.payload);  // Log the payload
        return {
          ...state,
          products: action.payload,  // Store the fetched products
        };
  
      case 'DELETE_PRODUCT':
        return {
          ...state,
          products: state.products.filter(product => product.id !== action.payload),
        };
  
      case 'UPDATE_PRODUCT':
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.payload.id
              ? { ...product, ...action.payload.updatedData }
              : product
          ),
        };
  
      default:
        return state;
    }
  };
  
  export default productReducer;
  