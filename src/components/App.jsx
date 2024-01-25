import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
export const App = () => {
  return (
    <div>
      <Feedback />
      <Statistics
        good={Statistics.good}
        neutral={Statistics.neutral}
        bad={Statistics.bad}
        total={Statistics.total}
        positivePercentage={Statistics.positivePercentage}
      />
    </div>
  );
};
