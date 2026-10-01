import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // Store all questions
  const [questions, setQuestions] = useState([]);

  // Current question index
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Store user's answers
  const [answers, setAnswers] = useState({});

  // Show results after all questions
  const [showResults, setShowResults] = useState(false);

  // Loading state
  const [loading, setLoading] = useState(true);

  /*
   * Load questions
   *
   * Currently we are using local data.
   * Later this can be replaced with an API call.
   */
  useEffect(() => {
    const pollQuestions = [
      {
        id: 1,
        question: "Who is more Responsible for Pakistan Issue?",
        options: [
          {
            id: 1,
            text: "Asim Munir",
          },
          {
            id: 2,
            text: "Imran Khan",
          },
        ],
      },

      {
        id: 2,
        question: "Which area needs the most improvement?",
        options: [
          {
            id: 1,
            text: "Education",
          },
          {
            id: 2,
            text: "Healthcare",
          },
          {
            id: 3,
            text: "Economy",
          },
          {
            id: 4,
            text: "Infrastructure",
          },
        ],
      },

      {
        id: 3,
        question: "What should be the highest priority?",
        options: [
          {
            id: 1,
            text: "Economic growth",
          },
          {
            id: 2,
            text: "Job creation",
          },
          {
            id: 3,
            text: "Education",
          },
          {
            id: 4,
            text: "Healthcare",
          },
        ],
      },

      {
        id: 4,
        question: "Which sector should receive more attention?",
        options: [
          {
            id: 1,
            text: "Technology",
          },
          {
            id: 2,
            text: "Agriculture",
          },
          {
            id: 3,
            text: "Manufacturing",
          },
          {
            id: 4,
            text: "Services",
          },
        ],
      },

      {
        id: 5,
        question: "What is most important for young people?",
        options: [
          {
            id: 1,
            text: "Education",
          },
          {
            id: 2,
            text: "Employment",
          },
          {
            id: 3,
            text: "Business opportunities",
          },
          {
            id: 4,
            text: "Skills development",
          },
        ],
      },

      {
        id: 6,
        question: "Which issue affects daily life the most?",
        options: [
          {
            id: 1,
            text: "Inflation",
          },
          {
            id: 2,
            text: "Unemployment",
          },
          {
            id: 3,
            text: "Electricity",
          },
          {
            id: 4,
            text: "Transportation",
          },
        ],
      },

      {
        id: 7,
        question: "Which area should receive more public investment?",
        options: [
          {
            id: 1,
            text: "Education",
          },
          {
            id: 2,
            text: "Healthcare",
          },
          {
            id: 3,
            text: "Transport",
          },
          {
            id: 4,
            text: "Energy",
          },
        ],
      },

      {
        id: 8,
        question: "What would help businesses grow?",
        options: [
          {
            id: 1,
            text: "Lower taxes",
          },
          {
            id: 2,
            text: "Better infrastructure",
          },
          {
            id: 3,
            text: "Easier financing",
          },
          {
            id: 4,
            text: "Simpler regulations",
          },
        ],
      },

      {
        id: 9,
        question: "Which change would have the biggest impact?",
        options: [
          {
            id: 1,
            text: "Better governance",
          },
          {
            id: 2,
            text: "Economic reforms",
          },
          {
            id: 3,
            text: "Education reforms",
          },
          {
            id: 4,
            text: "Healthcare reforms",
          },
        ],
      },

      {
        id: 10,
        question: "What should be the main focus for the future?",
        options: [
          {
            id: 1,
            text: "Economic stability",
          },
          {
            id: 2,
            text: "Education",
          },
          {
            id: 3,
            text: "Technology",
          },
          {
            id: 4,
            text: "Healthcare",
          },
        ],
      },
    ];

    setQuestions(pollQuestions);
    setLoading(false);
  }, []);

  // Loading screen
  if (loading) {
    return (
      <main className="poll-page">
        <div className="loading">
          <div className="loader"></div>
          <p>Loading poll...</p>
        </div>
      </main>
    );
  }

  // Results screen
  if (showResults) {
    return (
      <Results
        questions={questions}
        answers={answers}
      />
    );
  }

  // Make sure questions exist
  if (questions.length === 0) {
    return (
      <main className="poll-page">
        <div className="empty-state">
          <h2>No questions available</h2>
          <p>Please try again later.</p>
        </div>
      </main>
    );
  }

  const question = questions[currentQuestion];

  const selectedAnswer = answers[question.id];

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  // Select answer
  function selectAnswer(optionId) {
    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [question.id]: optionId,
    }));
  }

  // Next question / Submit
  function handleNext() {
    // Don't allow user to continue without answering
    if (!selectedAnswer) {
      return;
    }

    // If this is the last question
    if (currentQuestion === questions.length - 1) {
      setShowResults(true);
      return;
    }

    // Move to next question
    setCurrentQuestion((previousQuestion) => {
      return previousQuestion + 1;
    });
  }

  // Previous question
  function handlePrevious() {
    if (currentQuestion === 0) {
      return;
    }

    setCurrentQuestion((previousQuestion) => {
      return previousQuestion - 1;
    });
  }

  return (
    <main className="poll-page">
      <div className="poll-container">

        {/* Header */}
        <header className="poll-header">

          <div className="poll-icon">
            📊
          </div>

          <div>
            <h1>Public Poll</h1>
            <p>Share your opinion</p>
          </div>

        </header>

        {/* Poll Card */}
        <section className="poll-card">

          {/* Progress */}
          <div className="progress-info">

            <span>
              Question {currentQuestion + 1} of{" "}
              {questions.length}
            </span>

            <span>
              {Math.round(progress)}%
            </span>

          </div>

          <div className="question-progress">

            <div
              className="question-progress-bar"
              style={{
                width: `${progress}%`,
              }}
            ></div>

          </div>

          {/* Question */}
          <div className="question-section">

            <span className="question-number">
              Question {currentQuestion + 1}
            </span>

            <h2 className="poll-question">
              {question.question}
            </h2>

          </div>

          {/* Options */}
          <div className="poll-options">

            {question.options.map((option) => (

              <label
                key={option.id}
                className={`poll-option ${
                  selectedAnswer === option.id
                    ? "selected"
                    : ""
                }`}
              >

                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option.id}
                  checked={
                    selectedAnswer === option.id
                  }
                  onChange={() =>
                    selectAnswer(option.id)
                  }
                />

                <span className="custom-radio"></span>

                <span className="option-text">
                  {option.text}
                </span>

              </label>

            ))}

          </div>

          {/* Navigation */}
          <div className="navigation">

            <button
              className="previous-button"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              ← Previous
            </button>

            <button
              className="next-button"
              onClick={handleNext}
              disabled={!selectedAnswer}
            >
              {currentQuestion === questions.length - 1
                ? "Submit Answers"
                : "Next Question →"}
            </button>

          </div>

          <p className="privacy-text">
            Please answer all questions before submitting.
          </p>

        </section>

        <footer className="poll-footer">
          Public Polling System
        </footer>

      </div>
    </main>
  );
}


/*
 * Results Component
 */
function Results({ questions, answers }) {

  return (
    <main className="poll-page">

      <div className="poll-container">

        {/* Header */}
        <header className="poll-header">

          <div className="poll-icon success-icon">
            ✓
          </div>

          <div>
            <h1>Poll Completed</h1>
            <p>Thank you for participating</p>
          </div>

        </header>

        {/* Results */}
        <section className="poll-card">

          <div className="results-title">

            <h2>Your Answers</h2>

            <p>
              You answered all{" "}
              {questions.length} questions.
            </p>

          </div>

          <div className="answer-list">

            {questions.map((question, index) => {

              const selectedOption =
                question.options.find(
                  (option) =>
                    option.id === answers[question.id]
                );

              return (
                <div
                  className="answer-item"
                  key={question.id}
                >

                  <div className="answer-number">
                    {index + 1}
                  </div>

                  <div className="answer-content">

                    <p className="answer-question">
                      {question.question}
                    </p>

                    <p className="answer-selected">

                      ✓{" "}
                      {selectedOption
                        ? selectedOption.text
                        : "No answer"}

                    </p>

                  </div>

                </div>
              );

            })}

          </div>

        </section>

        <footer className="poll-footer">
          Public Polling System
        </footer>

      </div>

    </main>
  );
}

export default App;
