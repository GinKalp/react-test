import React, { Component } from 'react';
import Card from './Card';
import css from './Task9.module.css'

export default class Task9 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {

    (async ()=>{
      console.log('works')
      const data = await this.getTodos()
      console.log(data)
      this.setState({todos: data})
    })()
  }

  getTodos = async () =>{
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await resp.json()
    // console.log(data)
    return data.filter(item => item.id < 6)
  }

  render() {
    return (
      <div>
        <h3>Task 9</h3>
        <div className={css.wrapper}>
          {this.state.todos.map(item => <Card title={item.title} completed={item.completed} id={item.id} key={item.id} />)}
        </div>


      </div>
    );
  }
}

/* Task 9
Task 9 viduje atvaizduokite 5 būtinus atlikti darbų iš čia: https://jsonplaceholder.typicode.com/todos

Pastaba: 
- atkreipkite dėmesį, kad abu komponetai yra class tipo, 
todėl būtina naudoti "Class components State and Lifecycle";
- būtini atlikti darbai turi būti atvaizuojami vienoje eilutėje 
ir turėti šia informacija: pavadinimas, atlikta/neatlika (yes/no)
*/
