import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restored } from "../icecream/iceCream.slice";

function IceCreamView() {
  const [iceCreamQuantity, setIceCreamQuantity] = useState(1);
  const numberOfIceCreams = useSelector((state) => {
    return state.icecream.numberOfIceCreams;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of ice-cream - {numberOfIceCreams}</h2>
      <button
        onClick={() => {
          dispatch(ordered());
        }}>
        Order ice-cream
      </button>
      <label>Restore ice-cream: </label>
      <input
        type='number'
        onChange={(e) => {
          setIceCreamQuantity(Number(e.target.value));
        }}
      />
      <button
        onClick={() => {
          dispatch(restored(iceCreamQuantity));
        }}>
        Restore ice-cream
      </button>
    </div>
  );
}

export default IceCreamView;
