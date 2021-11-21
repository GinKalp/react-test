import React, { Component } from 'react';
import css from './Card.module.css'

export default class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
          <p><strong>{this.props.id}.</strong> {this.props.title} <i className={css.completed}>{this.props.completed ? 'Yes' : 'No'}</i></p>
        </div>
        )
  }
}
