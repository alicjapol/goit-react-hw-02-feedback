import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FeedbackOptions {
    static propTypes = {
        options: PropTypes.string.isRequired,
        onLeaveFeedback: PropTypes.func.isRequired,
    }
render(){
    const { options, onLeaveFeedback } = this.props;
    onLeaveFeedback = feedback => {
        this.setState(prevState => ({
          [feedback]: prevState[feedback] + 1,
        }));
      };
return(
<div>
        <h2>Please leave feedback</h2>
        <button onClick={this.onLeaveFeedback('good')}>{options}</button>
        <button onClick={this.onLeaveFeedback('neutral')}>{options}</button>
        <button onClick={this.onLeaveFeedback('bad')}>{options}</button>
      </div>
)
}
}
