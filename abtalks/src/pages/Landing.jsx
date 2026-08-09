import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Build",
    text: "Complete one practical coding task every day.",
  },
  {
    number: "02",
    title: "Prove",
    text: "Push your work to GitHub and create a public record.",
  },
  {
    number: "03",
    title: "Share",
    text: "Post your progress on LinkedIn and become visible.",
  },
];

const benefits = [
  "Build consistency",
  "Create public proof of work",
  "Become visible to recruiters",
  "Turn learning into real projects",
];

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m4 10 4 4 8-8" />
    </svg>
  );
}

function Landing() {
  return (
    <div className="landing">
      {/* Navigation */}
      <header className="site-nav">
        <Link to="/" className="brand">
          <span className="brand-mark">A</span>
          <span>ABTalks</span>
        </Link>

        <Link to="/dashboard" className="nav-link">
          Student Login
          <ArrowUpRight />
        </Link>
      </header>

      <main>
        {/* Hero */}
        <section className="hero section">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="live-dot" />
              THE 60-DAY BUILDING CHALLENGE
            </div>

            <h1>
              Build every day.
              <br />
              <span>Become visible.</span>
            </h1>

            <p className="hero-description">
              ABTalks helps college students turn 60 days of consistent
              coding into a public portfolio of proof.
            </p>

            <div className="hero-actions">
              <Link to="/dashboard" className="primary-button">
                Start the 60 Days
                <ArrowUpRight />
              </Link>

              <a href="#how-it-works" className="secondary-button">
                See how it works
              </a>
            </div>
          </div>

          {/* Hero dashboard preview */}
          <div className="hero-preview">
            <div className="preview-top">
              <div>
                <span className="preview-label">YOUR MOMENTUM</span>
                <strong>Day 12 of 60</strong>
              </div>
              <span className="streak-badge">🔥 12</span>
            </div>

            <div className="progress-track">
              <div className="progress-fill" />
            </div>

            <div className="preview-stats">
              <div>
                <strong>20%</strong>
                <span>Complete</span>
              </div>
              <div>
                <strong>48</strong>
                <span>Days left</span>
              </div>
              <div>
                <strong>12</strong>
                <span>Day streak</span>
              </div>
            </div>

            <div className="preview-task">
              <div className="task-icon">↗</div>
              <div>
                <span>Today's mission</span>
                <strong>Build a responsive portfolio</strong>
              </div>
              <span className="task-arrow">→</span>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="trust-strip">
          <div>
            <strong>60</strong>
            <span>days to build</span>
          </div>
          <div>
            <strong>01</strong>
            <span>commit every day</span>
          </div>
          <div>
            <strong>∞</strong>
            <span>proof you can show</span>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="section content-section">
          <div className="section-heading">
            <span className="section-number">01 — THE LOOP</span>
            <h2>One simple loop.<br />Every single day.</h2>
          </div>

          <div className="steps">
            {steps.map((step) => (
              <article className="step-card" key={step.number}>
                <span className="step-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Why ABTalks */}
        <section className="section momentum-section">
          <div className="momentum-copy">
            <span className="section-number">02 — WHY IT MATTERS</span>
            <h2>
              Your streak is
              <br />
              more than a number.
            </h2>

            <p>
              Every task you complete becomes evidence of what you can
              actually build. After 60 days, you don't just have a streak.
              You have a story.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-card-header">
              <span>WHAT YOU'LL BUILD</span>
              <span>60 DAYS</span>
            </div>

            <div className="benefit-list">
              {benefits.map((benefit) => (
                <div className="benefit-item" key={benefit}>
                  <span className="check">
                    <CheckIcon />
                  </span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recovery idea */}
        <section className="section recovery-section">
          <div className="recovery-card">
            <div className="recovery-icon">↻</div>

            <div>
              <span className="section-number">MISS A DAY?</span>
              <h2>Don't restart.<br />Recover.</h2>
              <p>
                Real life happens. ABTalks helps you get back into motion
                instead of making one missed day feel like failure.
              </p>
            </div>

            <div className="recovery-status">
              <span>RECOVERY MODE</span>
              <strong>Ready when you are →</strong>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section final-cta">
          <span className="section-number">03 — YOUR TURN</span>

          <h2>
            Sixty days.
            <br />
            <span>One version better.</span>
          </h2>

          <p>
            Your first commit is all it takes to start.
          </p>

          <Link to="/dashboard" className="primary-button large">
            Start Building
            <ArrowUpRight />
          </Link>
        </section>
      </main>

      <footer className="site-footer">
        <span>ABTalks</span>
        <span>Build. Prove. Share.</span>
        <span>60 / 60</span>
      </footer>
    </div>
  );
}

export default Landing;