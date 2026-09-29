import "./EmptyState.css";

/*
  USAGE
  <EmptyState title="No questions available" message="Please try again later." />
*/

function EmptyState({ title = "Nothing here", message }) {
  return (
    <main className="poll-page">
      <div className="empty-state">
        <h2>{title}</h2>
        {message && <p>{message}</p>}
      </div>
    </main>
  );
}

export default EmptyState;
