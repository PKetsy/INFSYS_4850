import { useEffect, useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';
import { useReducer } from 'react';
// import data from '../data';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const HomePage = () => {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);

  return (
    // <BrowserRouter>
    <div className="online-container">
      <header>
        <Link to="/onlineorder">
          <h3>The Fruit Stand & Seafood</h3>
        </Link>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            products.map((product) => (
              <div className="product" key={product.slug}>
                <Link to={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </Link>
                <div className="product-info">
                  <Link to={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                  </Link>

                  <p>
                    <strong>${product.price}</strong>
                  </p>
                  <button>Add to Cart</button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
    // </BrowserRouter>
  );
};

export default HomePage;
