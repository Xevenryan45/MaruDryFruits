import React from "react";
import "../App.css"
import { Link } from "react-router-dom";
import { ArrowRight, Globe, PersonCheckFill, AwardFill } from "react-bootstrap-icons";

const AboutUs = () => {
  return (
    <div className="about-us">
      <main className="content">
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <h1 className="hero-title1">Our Story</h1>
            <p className="hero-description1">
              Marudry Fruits was founded in 2025 with a simple mission: to deliver the finest quality dry fruits and nuts
              from the world's best orchards directly to health-conscious consumers.
            </p>
          </div>
        </section>

        {/* Our Values */}
        <section className="values">
          <div className="container">
            <h2 className="section-title">Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="icon-circle">
                  <AwardFill size={32} className="icon" />
                </div>
                <h3>Quality First</h3>
                <p>We never compromise on quality. Our products are carefully selected, rigorously tested, and preserved to maintain maximum nutrition.</p>
              </div>
              <div className="value-card">
                <div className="icon-circle">
                  <Globe size={32} className="icon" />
                </div>
                <h3>Sustainability</h3>
                <p>We partner with farmers who practice sustainable farming methods and ensure fair compensation for their hard work.</p>
              </div>
              <div className="value-card">
                <div className="icon-circle">
                  <PersonCheckFill size={32} className="icon" />
                </div>
                <h3>Customer Focus</h3>
                <p>Our customers are at the heart of everything we do. We strive to provide exceptional service and products that exceed expectations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta">
          <div className="container">
            <h2>Ready to experience the best quality dry fruits?</h2>
            <div className="cta-buttons">
              <Link to="/contactUs" className="cta-btn primary">
                Contact Us <ArrowRight size={20} />
              </Link>
              <a href="/" className="cta-btn secondary">
                Shop Now <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
