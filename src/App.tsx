import { useReducer } from "react";
type State = {
  count: number;
};

type Action = {
  type: string;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

const initialState: State = {
  count: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
}

export default App;
