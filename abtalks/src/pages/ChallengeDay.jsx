import { Link } from "react-router-dom";

function ChallengeDay() {
  return (
    <div className="challenge-page">
      <header className="challenge-nav">
        <Link to="/dashboard" className="back-button">
          ←
        </Link>

        <div>
          <span>CHALLENGE</span>
          <strong>DAY 12 / 60</strong>
        </div>

        <span className="day-progress">20%</span>
      </header>

      <main className="challenge-content">
        {/* Challenge header */}
        <section className="challenge-intro">
          <span className="section-number">TODAY'S MISSION</span>

          <h1>
            Build a responsive
            <br />
            portfolio section.
          </h1>

          <p>
            Create a portfolio section that looks great on mobile and
            desktop while practicing responsive layout techniques.
          </p>

          <div className="challenge-meta">
            <span>◷ 25 MIN</span>
            <span>● INTERMEDIATE</span>
          </div>
        </section>

        {/* What to build */}
        <section className="challenge-card">
          <div className="challenge-card-heading">
            <span className="card-label">WHAT YOU'LL BUILD</span>
            <span className="day-tag">DAY 12</span>
          </div>

          <h2>A responsive portfolio section</h2>

          <p>
            Build a section that showcases projects using a responsive
            layout. It should adapt naturally from a phone to a desktop
            screen.
          </p>

          <div className="skill-list">
            <span>Responsive CSS</span>
            <span>CSS Grid</span>
            <span>UI Layout</span>
          </div>
        </section>

        {/* Checklist */}
        <section className="challenge-section">
          <div className="section-top">
            <span className="card-label">YOUR PROGRESS</span>
            <span className="proof-count">2 / 4</span>
          </div>

          <div className="challenge-checklist">
            <div className="challenge-check completed">
              <span>✓</span>
              <div>
                <strong>Understand the task</strong>
                <small>You're ready to build.</small>
              </div>
            </div>

            <div className="challenge-check completed">
              <span>✓</span>
              <div>
                <strong>Build the feature</strong>
                <small>Portfolio section created.</small>
              </div>
            </div>

            <div className="challenge-check">
              <span>3</span>
              <div>
                <strong>Push to GitHub</strong>
                <small>Submit your repository or commit.</small>
              </div>
            </div>

            <div className="challenge-check">
              <span>4</span>
              <div>
                <strong>Share on LinkedIn</strong>
                <small>Tell people what you built.</small>
              </div>
            </div>
          </div>
        </section>

        {/* GitHub */}
        <section className="challenge-section">
          <div className="section-top">
            <span className="card-label">01 — GITHUB PROOF</span>
            <span className="proof-required">REQUIRED</span>
          </div>

          <div className="proof-input-card">
            <div className="proof-heading">
              <div className="github-icon">GH</div>

              <div>
                <strong>Show your code</strong>
                <span>Repository or commit URL</span>
              </div>
            </div>

            <input
              type="url"
              placeholder="https://github.com/..."
              aria-label="GitHub repository URL"
            />

            <button className="outline-button">
              Validate GitHub proof
            </button>
          </div>
        </section>

        {/* LinkedIn */}
        <section className="challenge-section">
          <div className="section-top">
            <span className="card-label">02 — LINKEDIN PROOF</span>
            <span className="proof-required">REQUIRED</span>
          </div>

          <div className="proof-input-card">
            <div className="proof-heading">
              <div className="linkedin-icon">in</div>

              <div>
                <strong>Share your progress</strong>
                <span>Make today's work visible</span>
              </div>
            </div>

            <button className="outline-button">
              Open LinkedIn ↗
            </button>
          </div>
        </section>

        {/* Completion */}
        <section className="completion-card">
          <div>
            <span className="card-label">ALMOST THERE</span>
            <h2>Finish Day 12</h2>
            <p>
              Submit both pieces of proof to complete today's challenge.
            </p>
          </div>

          <button className="primary-button complete-button">
            Complete Day 12
            <span>✓</span>
          </button>
        </section>

        {/* Help */}
        <section className="challenge-help">
          <span>NEED A RESET?</span>
          <strong>Missed a day? Use Recovery Mode →</strong>
        </section>
      </main>

      <nav className="bottom-nav">
        <Link to="/dashboard">
          <span>⌂</span>
          Home
        </Link>

        <Link to="/day/12" className="active">
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

export default ChallengeDay;