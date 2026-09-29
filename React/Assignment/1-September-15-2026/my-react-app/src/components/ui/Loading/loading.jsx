import "./Loading.css";

/*
  USAGE
  <Loading message="Loading poll..." />
*/

function Loading({ message = "Loading..." }) {
  return (
    <main className="poll-page">
      <div className="loading">
        <div className="loader" aria-hidden="true"></div>
        <p role="status">{message}</p>
      </div>
    </main>
  );
}

export default Loading;
