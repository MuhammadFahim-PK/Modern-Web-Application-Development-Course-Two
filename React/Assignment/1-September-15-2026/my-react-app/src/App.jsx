import { useEffect, useState } from "react";
import { pollQuestions } from "./constant/pollQuestions";
import Loading from "./components/ui/Loading/loading";
import EmptyState from "./components/ui/EmptyState/emptystate";
import Poll from "./pages/Poll/poll";
import PollResults from "./pages/PollResults/pollresults";

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

  useEffect(() => {
    // Currently local data. Later this can be replaced with an API call.
    setQuestions(pollQuestions);
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading message="Loading poll..." />;
  }

  if (showResults) {
    return <PollResults questions={questions} answers={answers} />;
  }

  if (questions.length === 0) {
    return (
      <EmptyState title="No questions available" message="Please try again later." />
    );
  }

  const question = questions[currentQuestion];
  const selectedAnswer = answers[question.id];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

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
    setCurrentQuestion((previousQuestion) => previousQuestion + 1);
  }

  // Previous question
  function handlePrevious() {
    if (currentQuestion === 0) {
      return;
    }

    setCurrentQuestion((previousQuestion) => previousQuestion - 1);
  }

  return (
    <Poll
      question={question}
      currentQuestion={currentQuestion}
      totalQuestions={questions.length}
      selectedAnswer={selectedAnswer}
      progress={progress}
      onSelectAnswer={selectAnswer}
      onNext={handleNext}
      onPrevious={handlePrevious}
    />
  );
}

export default App;
