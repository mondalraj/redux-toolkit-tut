import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, incrementByAmount } from "./redux/counter";

function App() {
  //Read state
  const { count } = useSelector((state) => state.counter);
  // const count = useSelector((state) => state.counter.count);

  //Get the actions
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        Increase by 10
      </button>
    </div>
  );
}

export default App;
