import React from 'react';
import {useCounterCtx} from "./CounterContext";
import css from './CompA1.module.css'

function CompA1() {
    const {plus10} = useCounterCtx()
  return (
    <div className={css.div}>
      <h5>CompA1</h5>
        <button onClick={plus10}>+10</button>
    </div>
  );
}

export default CompA1;
