import CosmicBackground from "@/components/CosmicBackground";
import Starfield from "@/components/Starfield";
import Navbar from "@/components/Navbar";
import PosterBackground from "@/components/PosterBackground";
import EmailForm from "@/components/EmailForm";
import FAQ from "@/components/FAQ";
import ScrollAnimator from "@/components/ScrollAnimator";

export default function Home() {
  return (
    <>
      <CosmicBackground />
      <Starfield />
      <ScrollAnimator />

      <div className="page-content">
        <Navbar />

        {/* HERO */}
        <section className="hero" id="hero">
          <PosterBackground />
          <div className="hero-content container">
            <h1 className="hero-anim-1">
              Your Personal <span className="ai-accent">AI&nbsp;Bunker</span>
              <br />
              for the <span className="violet">Streaming Chaos.</span>
            </h1>
            <p className="hero-sub hero-anim-2">
              Stop hunting episodes and dodging spoilers. Void organizes your entire watch experience automatically.
            </p>
            <div className="hero-cta hero-anim-3">
              <a href="#waitlist" className="btn btn-primary">
                Join the Waitlist
              </a>
              <a href="#how-it-works" className="hero-secondary">
                See How It Works &#8595;
              </a>
            </div>
          </div>
        </section>

        {/* PAIN */}
        <section className="pain" id="pain">
          <div className="container">
            <div className="anim" style={{ textAlign: "center" }}>
              <p className="section-label">The Problem</p>
              <h2 className="section-title">
                Every Night, the Same <span>Three Headaches.</span>
              </h2>
            </div>
            <div className="pain-grid">
              <div className="glass pain-card anim">
                <span className="icon">&#128257;</span>
                <h3>Your dub dropped. You had no idea.</h3>
                <p>
                  You check three Telegram channels, two websites, and a Reddit
                  thread — only to find out the episode came out three days ago
                  in your preferred dub. Every. Single. Time.
                </p>
              </div>
              <div className="glass pain-card anim">
                <span className="icon">&#128065;&#65039;</span>
                <h3>Opening Twitter feels like defusing a bomb.</h3>
                <p>
                  One wrong scroll and the finale twist is ruined. You&apos;ve
                  started avoiding the entire internet the day after an episode
                  drops. That&apos;s not how watching should feel.
                </p>
              </div>
              <div className="glass pain-card anim">
                <span className="icon">&#127744;</span>
                <h3>Season 3 dropped. You remember nothing.</h3>
                <p>
                  It&apos;s been 14 months. The characters are familiar but the
                  plot is gone. You&apos;d rewatch 8 episodes just to feel ready
                  — or just skip it entirely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section className="solution" id="solution">
          <div className="container">
            <div className="anim" style={{ textAlign: "center" }}>
              <p className="section-label">The Shift</p>
              <h2 className="section-title">
                What If Your Media <span>Actually Worked for You?</span>
              </h2>
            </div>
            <div className="solution-blocks">
              <div className="solution-block anim">
                <h3>Your dub is ready. Your phone already knows.</h3>
                <p>
                  Void monitors release groups in real time. The moment your
                  episode drops in your preferred dub — you get the
                  notification. No hunting, no checking.
                </p>
              </div>
              <div className="solution-block anim">
                <h3>Browse freely. Spoilers don&apos;t exist in your feed.</h3>
                <p>
                  Our AI shields analyze every piece of text in real time and
                  blur untagged spoilers before you see them. The internet is
                  safe again.
                </p>
              </div>
              <div className="solution-block anim">
                <h3>
                  Back after 6 months? You&apos;re caught up in 90 seconds.
                </h3>
                <p>
                  AI-generated recaps pull from plot databases to give you a
                  personalized, spoiler-calibrated summary of exactly what you
                  need to remember.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="features" id="features">
          <div className="container" id="how-it-works">
            <div className="anim" style={{ textAlign: "center" }}>
              <p className="section-label">Features</p>
              <h2 className="section-title">
                Five Systems. <span>One Bunker.</span>
              </h2>
            </div>
            <div className="features-grid">
              <div className="holo-border feature-card feature-card--large anim">
                <span className="badge">CORE FEATURE</span>
                <span className="icon">&#128225;</span>
                <h3>Dubbing Tracker</h3>
                <p>
                  Real-time monitoring of release groups via RSS, Telegram, and
                  custom scrapers. Personalized push alerts: &ldquo;Your episode
                  in [Studio Name] dub is live.&rdquo;
                </p>
              </div>
              <div className="holo-border feature-card anim">
                <span className="icon">&#128737;&#65039;</span>
                <h3>Anti-Spoiler Shield</h3>
                <p>
                  AI reads comment sections and social feeds in real time.
                  Spoilers — even unmarked ones — are blurred before your eyes
                  reach them.
                </p>
              </div>
              <div className="holo-border feature-card anim">
                <span className="icon">&#129504;</span>
                <h3>AI Recap</h3>
                <p>
                  Returning after a long break? Get a personalized, spoiler-safe
                  recap of previous seasons in under 2 minutes.
                </p>
              </div>
              <div className="holo-border feature-card anim">
                <span className="icon">&#128301;</span>
                <h3>Semantic &ldquo;Vibe&rdquo; Search</h3>
                <p>
                  Search by mood, not title. Try: &ldquo;Something cosmic,
                  minimal action, heavy philosophy.&rdquo; Powered by vector
                  embeddings.
                </p>
                <div className="vibe-search-demo">
                  &#128301; &ldquo;Something cosmic, minimal action, heavy
                  philosophy...&rdquo;
                </div>
              </div>
              <div className="holo-border feature-card anim">
                <span className="icon">&#127769;</span>
                <h3>Mood-Based Schedule</h3>
                <p>
                  Your queue adapts to your habits. Heavy dramas auto-schedule
                  for weekends. Light comedies for Tuesday nights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="pricing" id="pricing">
          <div className="container">
            <div className="anim" style={{ textAlign: "center" }}>
              <p className="section-label">Pricing</p>
              <h2 className="section-title">
                Simple. Honest. <span>Cosmic.</span>
              </h2>
            </div>
            <div className="pricing-grid">
              <div className="glass pricing-card anim">
                <h3>Free</h3>
                <div className="price">
                  $0{" "}
                  <span
                    style={{
                      fontSize: ".9rem",
                      fontWeight: 400,
                      color: "var(--text-muted)",
                    }}
                  >
                    / forever
                  </span>
                </div>
                <ul>
                  <li>
                    <span className="check">&#10003;</span> Series &amp; film
                    tracker
                  </li>
                  <li>
                    <span className="check">&#10003;</span> Basic dubbing
                    notifications
                  </li>
                  <li>
                    <span className="check">&#10003;</span> Standard release
                    calendar
                  </li>
                  <li>
                    <span className="check">&#10003;</span> Mood-based queue
                    (basic)
                  </li>
                  <li>
                    <span className="cross">&#10007;</span>{" "}
                    <span style={{ opacity: 0.5 }}>AI features</span>
                  </li>
                </ul>
                <a
                  href="#waitlist"
                  className="btn btn-outline"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Join Waitlist
                </a>
              </div>
              <div className="holo-border pricing-card pricing-card--highlighted anim">
                <span className="badge">MOST POWERFUL</span>
                <h3>AI-Powered</h3>
                <div className="price">
                  <span className="blurred-price">$12.99</span>
                </div>
                <span className="price-note">
                  Early access pricing locked for waitlist members
                </span>
                <ul>
                  <li>
                    <span className="check">&#10003;</span> Everything in Free
                  </li>
                  <li>
                    <span className="check">&#10003;</span> Unlimited AI Recaps
                  </li>
                  <li>
                    <span className="check">&#10003;</span> Anti-Spoiler Shield
                    (full AI)
                  </li>
                  <li>
                    <span className="check">&#10003;</span> Semantic Vibe Search
                  </li>
                  <li>
                    <span className="check">&#10003;</span> Advanced pattern
                    analytics
                  </li>
                  <li>
                    <span className="check">&#10003;</span> Priority
                    notifications
                  </li>
                </ul>
                <a
                  href="#waitlist"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Lock My Early Price
                </a>
              </div>
            </div>
            <p className="pricing-footer anim">
              Waitlist members get first access + locked early-bird pricing. No
              credit card required.
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final-cta" id="waitlist">
          <div className="container anim">
            <p className="section-label">Don&apos;t Wait</p>
            <h2 className="section-title">
              The Chaos Doesn&apos;t Have to Be{" "}
              <span>Your Problem.</span>
            </h2>
            <p>
              Void is being built for people who take their watchlist seriously.
              Get early access, lock your price, and help shape what the
              platform becomes.
            </p>
            <p className="urgency">
              Early access slots are limited. Currently: 2,400+ on the waitlist.
            </p>
            <EmailForm
              buttonText="Claim My Spot"
              style={{ maxWidth: 400, margin: "0 auto" }}
            />
            <p className="note">
              No spam. One email when we launch. Unsubscribe anytime.
            </p>
          </div>
        </section>

        <FAQ />

        {/* FOOTER */}
        <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-left">
              <div className="footer-logo">&#9670; VOID</div>
              <div className="footer-tagline">
                Your bunker in the streaming chaos.
              </div>
            </div>
            <div className="footer-links">
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQ</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
            <div className="footer-copy">
              &copy; 2025 Void. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
