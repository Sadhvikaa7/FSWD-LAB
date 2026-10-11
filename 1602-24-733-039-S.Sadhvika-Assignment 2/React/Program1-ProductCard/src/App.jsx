
import './App.css';

function ProductCard({
  name = 'Product',
  price = 0,
  image = '',
  rating = 4
}) {
  return (
    <div className="product-card">
      <img
        src={image}
        alt={name}
        className="product-image"
      />

      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
      <p>Rating: ⭐ {rating}/5</p>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1>Our Products</h1>

      <div className="product-container">
        <ProductCard
          name="Laptop"
          price={55000}
          image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
          rating={4.5}
        />

        <ProductCard
          name="Mobile"
          price={20000}
          image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
          rating={4.2}
        />

        <ProductCard
          name="Headphones"
          price={2500}
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
          rating={4}
        />

        <ProductCard
          name="Watch"
          price={3000}
          image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
          rating={4}
        />
      </div>
    </div>
  );
}

export default App;
