import React, { Component } from 'react';
import css from './Feedback.css';
import { onLeaveFeedback } from '../Statistics/Statistics.jsx';

export default class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div className={css.wrapper}>
        <h2>Please leave feedback</h2>
        <button onClick={this.onLeaveFeedback('good')}>Good</button>
        <button onClick={this.onLeaveFeedback('neutral')}>Neutral</button>
        <button onClick={this.onLeaveFeedback('bad')}>Bad</button>
      </div>
    );
  }
}
