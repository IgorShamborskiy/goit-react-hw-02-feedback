import { Component } from 'react';
import Controls from './FeedbackOptions/FeedbackOptions';
import Statistic from './Statistic/StatisticValue';
import css from './Feedback.module.css';
class Counter extends Component {
  static defaultProps = { initialValue: 0 };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodIncrement = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  neutralIncrement = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  badIncrement = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    let percent = 0;
    percent = ((this.state.good / this.countTotalFeedback()) * 100).toFixed();
    return percent;
  };
  onLeaveFeedback = feedback => {
    this.setState(prevSate => ({
      [feedback]: prevSate[feedback] + 1,
    }));
  };
  show = () => {
    this.setState(this.countTotalFeedback() > 0);
  };
  hide = () => {
    this.setState(this.countTotalFeedback() < 0);
  };

  render() {
    return (
      <container className={css.container}>
        <h1>Please leave feedback</h1>
        <Controls
          ongoodIncrement={this.goodIncrement}
          onneutralIncrement={this.neutralIncrement}
          onbadIncrement={this.badIncrement}
        />
        <h2>Statistics</h2>

        <Statistic
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </container>
    );
  }
}
export default Counter;
