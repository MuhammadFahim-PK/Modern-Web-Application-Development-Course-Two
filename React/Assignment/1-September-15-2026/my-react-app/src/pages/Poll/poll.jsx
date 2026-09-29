import PollShell from "../../components/ui/PollShell/pollshell";
import "./Poll.css";

/*
  Presentational "taking the poll" screen. All state (which question, the
  answers so far) lives in App.jsx and is passed in as props, because the
  results screen needs that same state once the poll is finished.

  USAGE
  <Poll
    question={question}
    currentQuestion={currentQuestion}
    totalQuestions={questions.length}
    selectedAnswer={answers[question.id]}
    progress={progress}
    onSelectAnswer={(optionId) => ...}
    onNext={() => ...}
    onPrevious={() => ...}
  />
*/

function Poll({
  question,
  currentQuestion,
  totalQuestions,
  selectedAnswer,
  progress,
  onSelectAnswer,
  onNext,
  onPrevious,
}) {
  const isLastQuestion = currentQuestion === totalQuestions - 1;

  return (
    <PollShell icon="📊" title="Public Poll" subtitle="Share your opinion">
      {/* Progress */}
      <div className="progress-info">
        <span>
          Question {currentQuestion + 1} of {totalQuestions}
        </span>
        <span>{Math.round(progress)}%</span>
      </div>

      <div
        className="question-progress"
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="question-progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Question */}
      <div className="question-section">
        <span className="question-number">Question {currentQuestion + 1}</span>
        <h2 className="poll-question">{question.question}</h2>
      </div>

      {/* Options */}
      <div className="poll-options">
        {question.options.map((option) => (
          <label
            key={option.id}
            className={`poll-option ${selectedAnswer === option.id ? "selected" : ""}`}
          >
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option.id}
              checked={selectedAnswer === option.id}
              onChange={() => onSelectAnswer(option.id)}
            />
            <span className="custom-radio" aria-hidden="true"></span>
            <span className="option-text">{option.text}</span>
          </label>
        ))}
      </div>

      {/* Navigation */}
      <div className="navigation">
        <button
          type="button"
          className="previous-button"
          onClick={onPrevious}
          disabled={currentQuestion === 0}
        >
          ← Previous
        </button>

        <button
          type="button"
          className="next-button"
          onClick={onNext}
          disabled={!selectedAnswer}
        >
          {isLastQuestion ? "Submit Answers" : "Next Question →"}
        </button>
      </div>

      <p className="privacy-text">Please answer all questions before submitting.</p>
    </PollShell>
  );
}

export default Poll;
