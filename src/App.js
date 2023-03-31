import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./reducers/counterReducers";

const App = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(increment());
  };

  const handleSub = () => {
    dispatch(decrement());
  };

  return (
    <>
      <h3>my count value is {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
    </>
  );
};

export default App;
