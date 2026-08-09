import { Link } from "react-router-dom";

const achievements = [
  {
    icon: "01",
    title: "First Commit",
    text: "You started building.",
    unlocked: true,
  },
  {
    icon: "07",
    title: "7 Day Builder",
    text: "One week of consistency.",
    unlocked: true,
  },
  {
    icon: "10",
    title: "Momentum",
    text: "10 days completed.",
    unlocked: true,
  },
  {
    icon: "30",
    title: "Halfway Hero",
    text: "Complete 30 days.",
    unlocked: false,
  },
];

function Dashboard() {
  return (
    <div className="dashboard-page">
      <header className="dashboard-nav">
        <Link to="/" className="brand">
          <span className="brand-mark">A</span>
          <span>ABTalks</span>
        </Link>

        <button className="menu-button" aria-label="Open menu">
          ☰
        </button>
      </header>

      <main className="dashboard-content">
        {/* Greeting */}
        <section className="dashboard-greeting">
          <span className="section-number">YOUR JOURNEY</span>
          <h1>
            Good evening,
            <br />
            <span>Ayush.</span> 👋
          </h1>
          <p>You're building something that lasts.</p>
        </section>

        {/* Streak */}
        <section className="streak-card">
          <div className="streak-header">
            <div>
              <span className="card-label">CURRENT STREAK</span>
              <strong>🔥 12 days</strong>
            </div>

            <span className="day-count">12 / 60</span>
          </div>

          <div className="dashboard-progress">
            <div className="dashboard-progress-fill" />
          </div>

          <div className="streak-footer">
            <span>20% complete</span>
            <span>48 days left</span>
          </div>
        </section>

        {/* Today's task */}
        <section className="dashboard-section">
          <div className="section-top">
            <span className="card-label">TODAY'S MISSION</span>
            <span className="day-tag">DAY 12</span>
          </div>

          <div className="mission-card">
            <div className="mission-icon">↗</div>

            <div className="mission-content">
              <span className="mission-type">BUILD</span>
              <h2>Build a responsive portfolio section.</h2>

              <div className="mission-meta">
                <span>◷ 25 min</span>
                <span>● Intermediate</span>
              </div>
            </div>
          </div>

          <Link to="/day/12" className="primary-button dashboard-cta">
            Continue Day 12
            <span>↗</span>
          </Link>
        </section>

        {/* Proof pipeline */}
        <section className="dashboard-section">
          <div className="section-top">
            <span className="card-label">TODAY'S PROOF</span>
            <span className="proof-count">2 / 3</span>
          </div>

          <div className="proof-card">
            <div className="proof-row completed">
              <span className="proof-check">✓</span>
              <div>
                <strong>Build</strong>
                <span>Task completed</span>
              </div>
              <span className="proof-status">DONE</span>
            </div>

            <div className="proof-row completed">
              <span className="proof-check">✓</span>
              <div>
                <strong>GitHub</strong>
                <span>Commit submitted</span>
              </div>
              <span className="proof-status">DONE</span>
            </div>

            <div className="proof-row">
              <span className="proof-check pending">○</span>
              <div>
                <strong>LinkedIn</strong>
                <span>Share today's work</span>
              </div>
              <span className="proof-status pending-text">NEXT</span>
            </div>
          </div>
        </section>

        {/* Milestone */}
        <section className="milestone-card">
          <div className="milestone-icon">🔥</div>

          <div>
            <span className="card-label">NEXT MILESTONE</span>
            <h2>15 day streak</h2>
            <p>Just 3 more days to unlock.</p>
          </div>

          <span className="milestone-arrow">→</span>
        </section>

        {/* Achievements */}
        <section className="dashboard-section">
          <div className="section-top">
            <span className="card-label">ACHIEVEMENTS</span>
            <span className="achievement-count">3 / 4</span>
          </div>

          <div className="achievement-grid">
            {achievements.map((achievement) => (
              <article
                className={`achievement ${
                  !achievement.unlocked ? "locked" : ""
                }`}
                key={achievement.title}
              >
                <span className="achievement-icon">{achievement.icon}</span>

                <strong>{achievement.title}</strong>
                <p>{achievement.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Recovery */}
        <section className="dashboard-recovery">
          <span className="card-label">STAY IN MOTION</span>
          <h2>Missed a day?</h2>
          <p>
            No restart. No guilt. Pick up where you left off and keep
            building.
          </p>
          <span className="recovery-link">Recovery Mode →</span>
        </section>
      </main>

      <nav className="bottom-nav">
        <Link to="/dashboard" className="active">
          <span>⌂</span>
          Home
        </Link>

        <Link to="/day/12">
          <span>+</span>
          Challenge
        </Link>

        <Link to="/">
          <span>○</span>
          Profile
        </Link>
      </nav>
    </div>
  );
}

export default Dashboard;