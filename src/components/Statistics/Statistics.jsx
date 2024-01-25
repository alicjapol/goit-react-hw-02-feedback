import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Statistics extends React.Component {
    static propTypes = {
      good: this.propTypes.string,
      neutral: this.propTypes.string,
      bad: this.propTypes.string,
    };
  
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  
    onLeaveFeedback = feedback => {
      this.setState(prevState => ({
        [feedback]: prevState[feedback] + 1,
      }));
    };
  
    countTotalFeedback() {
      const { good, neutral, bad } = this.state;
      return good + neutral + bad;
    }
  
    countPositiveFeedbackPercentage() {
      // const { good, neutral, bad } = this.state;
      // const total = this.countTotalFeedback();
      // const positivePercentage = this.countPositiveFeedbackPercentage();
      const total = this.countTotalFeedback();
      const { good } = this.state;
      const positivePercentage =
        total === 0 ? 0 : Math.round((good / total) * 100);
  
      return positivePercentage;
    }
  
    render() {
      const { good, bad, neutral } = this.state;
      const total = this.countTotalFeedback();
      const positivePercentage = this.countPositiveFeedbackPercentage();
  
      return (
        <div>
          <h3>Statistics</h3>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total Opinions: {total}</p>
          <p>Positive Feedback Percentage: {positivePercentage}%</p>
        </div>
      );
    }
  }