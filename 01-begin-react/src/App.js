import React, { useRef } from "react";
import Counter from "./Counter"
import produce from 'immer';

window.produce = produce;

const initialState = {}

function App() {
  return (
    <Counter/>
  );
}

export default App;