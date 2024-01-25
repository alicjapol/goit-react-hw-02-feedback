import React, { Component } from 'react';
import css from './Feedback.css';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const totalFeedback = this.countTotalFeedback();
    const { good } = this.state;
    const positivePercentage =
      totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
    return positivePercentage;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    Math.floor(positivePercentage);

    return (
      <div className={css.wrapper}>
        <h2>Please leave feedback</h2>
        <button onClick={() => this.handleFeedback('good')}>Good</button>
        <button onClick={() => this.handleFeedback('neutral')}>Neutral</button>
        <button onClick={() => this.handleFeedback('bad')}>Bad</button>

        <div>
          <h3>Statistics</h3>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total Opinions: {totalFeedback}</p>
          <p>Positive Feedback Percentage: {positivePercentage}%</p>
        </div>
      </div>
    );
  }
}
