import React, {useState} from 'react';
import CompA from './CompA';
import CompB from './CompB';
import {useCounterCtx} from "./CounterContext";
import css from './Task8.module.css'

function Task8() {
    // const [counter, setCounter] = useState()
    const {counter} = useCounterCtx()
    return (
        <div>
            <h3>Task 8</h3>
            <div className={css['d-flex']}>
                <h4>Counter: {counter}</h4>
                <div className={css['d-flex']}>
                    <CompA/>
                    <CompB/>
                </div>
            </div>
            {counter >= 100 && <p>Counter can't be more than 100!</p>}
            {counter <= 0 && <p>Counter can't be less than 0!</p>}
        </div>
    );
}

export default Task8;

/* Task 8
task-8 aplanke rasite kelis komponetus. Task8 komponente, turi būti atvaizduojami
šie komponentai: CompA (viduje turi <h2>CompA</h2> ir CompA1 (su tekstu <h3>CompA1</h3>))
ir CompB (viduje turi <h2>CompB</h2>).

Task8 komponentų medis
- CompA
-- CompA1
- CompB

Task8 viduje bus sukurtas Counter state'as, kuri bus galima valdyti iš CompA1 ir CompB
State'as bus valdomas su mygtkais, kurie leis state'ą padidinti 10 taškų arba pamažinti 10.
State'ui pasiekus 100, bus draudžiama didinti state'ą ir pasirodys pranešimas "Didinti nebegalima"

Pastaba: naudokite useState, useContext (Context API).

*/
