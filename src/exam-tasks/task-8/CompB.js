import React from 'react';
import {useCounterCtx} from "./CounterContext";
import css from './CompB.module.css'

function CompB() {
    const {minus10} = useCounterCtx()
  return (
    <div className={css.div}>
      <h4>CompB</h4>
        <button onClick={minus10}>-10</button>
    </div>
  );
}

export default CompB;
