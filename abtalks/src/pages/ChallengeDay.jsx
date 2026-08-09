import { Link } from "react-router-dom";

function ChallengeDay() {
  return (
    <main className="placeholder-page">
      <span className="section-number">DAY 12 / 60</span>
      <h1>Today's challenge.</h1>
      <p>Your challenge workspace is coming next.</p>
      <Link to="/dashboard" className="primary-button">
        Dashboard
      </Link>
    </main>
  );
}

export default ChallengeDay;