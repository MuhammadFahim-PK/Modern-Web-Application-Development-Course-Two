import "./PollShell.css";

/*
  Shared chrome for every full-screen poll view: the icon + title header,
  the white card, and the footer. Poll (taking the poll) and PollResults
  (showing answers) both render inside this, so they stay visually
  identical without duplicating the header/card/footer markup twice.

  USAGE
  <PollShell icon="📊" title="Public Poll" subtitle="Share your opinion">
    ...card content...
  </PollShell>

  <PollShell icon="✓" variant="success" title="Poll Completed" subtitle="Thank you for participating">
    ...card content...
  </PollShell>
*/

function PollShell({ icon, variant = "default", title, subtitle, children }) {
  return (
    <main className="poll-page">
      <div className="poll-container">
        <header className="poll-header">
          <div className={`poll-icon${variant === "success" ? " success-icon" : ""}`}>
            {icon}
          </div>
          <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
        </header>

        <section className="poll-card">{children}</section>

        <footer className="poll-footer">Public Polling System</footer>
      </div>
    </main>
  );
}

export default PollShell;
