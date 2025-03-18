import React, { useState } from "react";
import { PhoneFill, EnvelopeFill, GeoAltFill, ClockFill, SendFill } from "react-bootstrap-icons";
import { useToast } from "../hooks/UseToast"


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you soon."
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contactus-page">
      <main className="contactus-main">
        {/* Hero Section */}
        <section className="contactus-hero">
          <div className="containerContact">
            <h1 className="contactus-title">Contact Us</h1>
            <p className="contactus-subtitle">
              We'd love to hear from you. Reach out to us with any questions, feedback, or inquiries.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="contactus-info-form">
          <div className="container">
            <div className="contactus-grid">
              {/* Contact Information */}
              <div className="contact-info">
                <h2 className="contact-info-title">Get in Touch</h2>
                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <GeoAltFill className="contact-icon" />
                    <div>
                      <h3 className="contact-info-heading">Our Location</h3>
                      <p className="contact-info-text">
                        123 Orchard Street, Nutville, CA 94123, United States
                      </p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <EnvelopeFill className="contact-icon" />
                    <div>
                      <h3 className="contact-info-heading">Email Us</h3>
                      <p className="contact-info-text">info@marudryfruits.com</p>
                      <p className="contact-info-text">support@marudryfruits.com</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <PhoneFill className="contact-icon" />
                    <div>
                      <h3 className="contact-info-heading">Call Us</h3>
                      <p className="contact-info-text">+1 (555) 123-4567</p>
                      <p className="contact-info-text">+1 (555) 765-4321</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <ClockFill className="contact-icon" />
                    <div>
                      <h3 className="contact-info-heading">Business Hours</h3>
                      <p className="contact-info-text">Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p className="contact-info-text">Sat: 10:00 AM - 4:00 PM</p>
                      <p className="contact-info-text">Sun: Closed</p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="contact-map">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4104008663758!2d3.6242335754107358!3d6.469584123786655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf979fee11457%3A0xa5d6185fb1770461!2sAptech%20Computer%20Education%20Ajah%20Centre!5e0!3m2!1sen!2sng!4v1742215790541!5m2!1sen!2sng" 
                    title="Our Location"
                    frameBorder="0"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form-card">
                <h2 className="contact-form-title">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-form-group">
                    <label htmlFor="name" className="contact-label">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="contact-input"
                    />
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="email" className="contact-label">Your Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="contact-input"
                    />
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="subject" className="contact-label">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you?"
                      className="contact-input"
                    />
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="message" className="contact-label">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Write your message here..."
                      rows={5}
                      className="contact-textarea"
                    />
                  </div>
                  <button type="submit" className="contact-btn">
                    <SendFill className="contact-btn-icon" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="faqs-section">
          <div className="container">
            <h2 className="faqs-title">Frequently Asked Questions</h2>
            <div className="faqs-list">
              <div className="faq-card">
                <h3 className="faq-question">How can I track my order?</h3>
                <p className="faq-answer">
                  Once your order is shipped, you'll receive a tracking number via email. Use it on our website or directly on the courier's site.
                </p>
              </div>
              <div className="faq-card">
                <h3 className="faq-question">What is your return policy?</h3>
                <p className="faq-answer">
                  We accept returns within 14 days if the product is in its original packaging. Contact our customer service to initiate a return.
                </p>
              </div>
              <div className="faq-card">
                <h3 className="faq-question">Do you ship internationally?</h3>
                <p className="faq-answer">
                  Yes, we ship to many countries worldwide. Shipping costs and delivery times vary by location.
                </p>
              </div>
              <div className="faq-card">
                <h3 className="faq-question">How are your products packaged?</h3>
                <p className="faq-answer">
                  Our products are packaged in airtight, resealable bags to maintain freshness. Gift packs come in premium decorative boxes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;
