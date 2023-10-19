import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, selectCount } from "./counterSlice";

function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
      </header>
    </div>
  );
}

export default App;
