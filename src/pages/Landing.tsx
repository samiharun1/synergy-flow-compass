
import { useNavigate } from "react-router-dom";
import { Check, Calendar, Target, MessageSquareText, ChartBar } from "lucide-react";
import mockupImage from "../assets/mockup.png";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="landing-page">
      {/* Header/Navigation */}
      <header className="landing-header">
        <div className="landing-logo">
          <div className="logo-icon">S</div>
          <span className="logo-text">SynergyFlow</span>
        </div>
        <nav className="landing-nav">
          <a href="#features" className="nav-link">Features</a>
          <a href="#how-it-works" className="nav-link">How it works</a>
          <a href="#" className="nav-link">Pricing</a>
          <button className="login-button" onClick={handleLogin}>Log in</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Build stronger teams.<br />
            <span className="primary-color">Together.</span>
          </h1>
          <p className="hero-description">
            The all-in-one platform for team building, goal tracking, and organizational well-being.
          </p>
          <div className="hero-buttons">
            <button className="primary-button">Try for free</button>
            <button className="secondary-button">Book a demo</button>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src={mockupImage} 
            alt="SynergyFlow App Mockup"
          />
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="problem-section">
        <div className="section-header">
          <h2 className="section-title">Why teams choose SynergyFlow</h2>
          <p className="section-description">
            Teams are complex, but managing them doesn't have to be. SynergyFlow brings together essential tools in one seamless experience.
          </p>
        </div>
        
        <div className="problem-solution-container">
          <div className="card">
            <h3 className="card-title">The Problem</h3>
            <ul className="list">
              <li className="list-item">
                <div className="problem-icon">×</div>
                <p>Multiple disconnected tools for team management</p>
              </li>
              <li className="list-item">
                <div className="problem-icon">×</div>
                <p>Lack of visibility into team well-being</p>
              </li>
              <li className="list-item">
                <div className="problem-icon">×</div>
                <p>No clear way to track team goals and progress</p>
              </li>
            </ul>
          </div>
          
          <div className="card">
            <h3 className="card-title">Our Solution</h3>
            <ul className="list">
              <li className="list-item">
                <div className="solution-icon"><Check size={12} /></div>
                <p>All-in-one platform for team management and well-being</p>
              </li>
              <li className="list-item">
                <div className="solution-icon"><Check size={12} /></div>
                <p>Regular check-ins and mood tracking system</p>
              </li>
              <li className="list-item">
                <div className="solution-icon"><Check size={12} /></div>
                <p>Visual tools to track goals and celebrate progress</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-header">
          <h2 className="section-title">Everything you need in one place</h2>
          <p className="section-description">
            SynergyFlow combines team building and project management into one seamless experience.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Check size={24} />
            </div>
            <h3 className="feature-title">Daily Check-ins</h3>
            <p className="feature-description">
              Track team wellbeing with simple emoji check-ins and optional comments.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Target size={24} />
            </div>
            <h3 className="feature-title">Team Goals</h3>
            <p className="feature-description">
              Set, track, and celebrate team and individual goals with visual progress indicators.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Calendar size={24} />
            </div>
            <h3 className="feature-title">Calendar Planning</h3>
            <p className="feature-description">
              Coordinate team activities and track important deadlines in a shared calendar.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <MessageSquareText size={24} />
            </div>
            <h3 className="feature-title">Reflections</h3>
            <p className="feature-description">
              Capture insights and learnings with guided reflection templates.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <ChartBar size={24} />
            </div>
            <h3 className="feature-title">Analytics</h3>
            <p className="feature-description">
              Visualize team progress and well-being with insightful reports and dashboards.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <h3 className="feature-title">Team Connection</h3>
            <p className="feature-description">
              Build stronger relationships with fun ice breakers and meaningful team activities.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="section-header">
          <h2 className="section-title">How it works</h2>
          <p className="section-description">
            Get started with SynergyFlow in three simple steps
          </p>
        </div>

        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3 className="step-title">Create your workspace</h3>
            <p className="step-description">
              Sign up and create your team workspace in minutes. No credit card required.
            </p>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <h3 className="step-title">Invite your team</h3>
            <p className="step-description">
              Add team members with a simple invitation link and customize permissions.
            </p>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <h3 className="step-title">Start collaborating</h3>
            <p className="step-description">
              Begin with daily check-ins, set team goals, and watch your team thrive.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to strengthen your team?</h2>
          <p className="cta-description">
            Join thousands of teams already using SynergyFlow to build stronger connections and achieve their goals.
          </p>
          <div className="cta-buttons">
            <button className="cta-primary">Try for free</button>
            <button className="cta-secondary">Book a demo</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div>
              <div className="footer-brand landing-logo">
                <div className="logo-icon">S</div>
                <span className="logo-text">SynergyFlow</span>
              </div>
              <p className="footer-description">
                SynergyFlow helps teams collaborate effectively, track goals, and build stronger connections.
              </p>
            </div>
            
            <div>
              <h4 className="footer-heading">Product</h4>
              <div className="footer-links">
                <a href="#" className="footer-link">Features</a>
                <a href="#" className="footer-link">Pricing</a>
                <a href="#" className="footer-link">Use cases</a>
                <a href="#" className="footer-link">Security</a>
              </div>
            </div>
            
            <div>
              <h4 className="footer-heading">Company</h4>
              <div className="footer-links">
                <a href="#" className="footer-link">About us</a>
                <a href="#" className="footer-link">Careers</a>
                <a href="#" className="footer-link">Blog</a>
                <a href="#" className="footer-link">Contact us</a>
              </div>
            </div>
            
            <div>
              <h4 className="footer-heading">Contact</h4>
              <div className="footer-links">
                <p className="footer-contact">hello@synergyflow.com</p>
                <p className="footer-contact">+1 (123) 456-7890</p>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p className="footer-copyright">© 2025 SynergyFlow. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#" className="legal-link">Terms</a>
              <a href="#" className="legal-link">Privacy</a>
              <a href="#" className="legal-link">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
