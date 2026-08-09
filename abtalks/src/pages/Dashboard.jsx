import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <main className="placeholder-page">
      <span className="section-number">ABTALKS</span>
      <h1>Your journey starts here.</h1>
      <p>Dashboard coming next.</p>
      <Link to="/" className="primary-button">
        Back home
      </Link>
    </main>
  );
}

export default Dashboard;