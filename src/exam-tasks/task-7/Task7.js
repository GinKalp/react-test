import React, {useRef} from 'react';
import css from './Task7.module.css'

function Task7() {
  const divEl = useRef(null)
  const lightTheme = () =>{
    divEl.current.className = `${css.main} ${css.light}`
  }
  const darkTheme = () =>{
    divEl.current.className = `${css.main} ${css.dark}`
  }
  return (
    <div className={css.main} ref={divEl}>
      <h3>Task 7</h3>
      <div className={css.wrapper}>
        <h1>Tekstas</h1>
        <p>Mazas tekstas</p>
        <button onClick={lightTheme}>Light theme</button>
        <button onClick={darkTheme}>Dark theme</button>
      </div>
    </div>
  );
}

export default Task7;

/* Task 7
Task 7 komponento viduje sukurkite h1 ir p žymas su tekstu ir du mygtukus.

Vienas mygtukas vadinsis "Light theme", kurį paspaudus Task7 komponento fonas
taps šios spalvos #f1f1f1, o tekstas #0000.
Kitas mygtukas vadinsis "Dark theme", kurį paspaudus Task7 komponento fonas
taps šios spalvos #000000, o tekstas #f1f1f1.

Pastabos:
- mygtukai turi būti atvaizduojami komponento viduje, jiems atskirų komponentų
kurti nereikia;
- panaudokite useRef.
*/
