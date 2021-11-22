import React, { Component } from 'react';
import css from './Card.module.css'

export default class Card extends Component {
  render() {
    return (
          <li><strong>{this.props.id}.</strong> {this.props.title} <i className={css.completed}>{this.props.completed ? 'Yes' : 'No'}</i></li>
        )
  }
}
