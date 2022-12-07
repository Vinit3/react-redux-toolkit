import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

function CakeView() {
  const numberOfCakes = useSelector((state) => {
    return state.cake.numberOfCakes;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes - {numberOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <button onClick={() => dispatch(restocked())}>Restore cakes</button>
    </div>
  );
}

export default CakeView;
