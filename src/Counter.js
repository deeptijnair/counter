import "./styles.css"

function Counter({ count, increment, decrement, reset }) {
  return (
    <div className="counter">
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
