import { BrowserRouter, Link } from 'react-router-dom';
import data from '../data';

const HomePage = () => {
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
          {data.products.map((product) => (
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
          ))}
        </div>
      </main>
    </div>
    // </BrowserRouter>
  );
};

export default HomePage;
