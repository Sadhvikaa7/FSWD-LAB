
import './App.css';

function Button({ text, variant }) {
  const styles = {
    primary: { backgroundColor: 'blue', color: 'white' },
    success: { backgroundColor: 'green', color: 'white' },
    danger: { backgroundColor: 'red', color: 'white' }
  };

  return (
    <button
      className="btn"
      style={styles[variant]}
    >
      {text}
    </button>
  );
}

function App() {
  return (
    <div className="container">
      <h1>React Button Styling</h1>
      <Button text="Primary" variant="primary" />
      <Button text="Success" variant="success" />
      <Button text="Danger" variant="danger" />
    </div>
  );
}

export default App;
