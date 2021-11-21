import React from 'react';
import {useCounterCtx} from "./CounterContext";

function CompA1() {
    const {plus10} = useCounterCtx()
  return (
    <div>
      <h5>CompA1</h5>
        <button onClick={plus10}>+10</button>
    </div>
  );
}

export default CompA1;
