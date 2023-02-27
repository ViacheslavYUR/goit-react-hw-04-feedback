import React from 'react';

import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  statePropNames = Object.keys(this.state);

  handleFeedback = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return total;
  };

  positivePercentage = () => {
    const total = this.countTotalFeedback();
    const feedBackPercentage =
      (this.state.good / this.countTotalFeedback()) * 100;
    if (!total) {
      return 0;
    }

    return Number(feedBackPercentage.toFixed(0));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.statePropNames}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title={'Statistics '}>
          {this.countTotalFeedback() !== 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.positivePercentage()}
            />
          )}

          {this.countTotalFeedback() === 0 && (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
