import PollShell from "../../components/ui/PollShell/pollshell";
import "./PollResults.css";

/*
  USAGE
  <PollResults questions={questions} answers={answers} />
  answers is a { [questionId]: optionId } map, same shape App.jsx builds
  while the poll is being taken.
*/

function PollResults({ questions, answers }) {
  return (
    <PollShell
      icon="✓"
      variant="success"
      title="Poll Completed"
      subtitle="Thank you for participating"
    >
      <div className="results-title">
        <h2>Your Answers</h2>
        <p>You answered all {questions.length} questions.</p>
      </div>

      <div className="answer-list">
        {questions.map((question, index) => {
          const selectedOption = question.options.find(
            (option) => option.id === answers[question.id],
          );

          return (
            <div className="answer-item" key={question.id}>
              <div className="answer-number">{index + 1}</div>

              <div className="answer-content">
                <p className="answer-question">{question.question}</p>
                <p className="answer-selected">
                  ✓ {selectedOption ? selectedOption.text : "No answer"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </PollShell>
  );
}

export default PollResults;
