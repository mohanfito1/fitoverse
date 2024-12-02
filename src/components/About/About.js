import React from "react";
import "./About.css";
import { motion } from "framer-motion"; // For animation

const About = () => {
  return (
    <div className="about-page">
      {/* Header Section with Gradient Background */}
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1>About Fitoverse</h1>
        <p className="header-subtext">Innovating Sports Infrastructure for a Healthier Future</p>
      </motion.div>

      {/* Main Content Section */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Company Overview */}
        <section className="company-overview">
          <div className="section-header">
            <h2>Who We Are</h2>
          </div>
          <p>
            Fitoverse is a premium sports infrastructure company that focuses on designing and constructing world-class sports arenas and recreational facilities. We are committed to providing innovative solutions that help communities and institutions create spaces where sports, health, and well-being thrive. With a proven track record of delivering high-quality facilities, we are a trusted partner for projects worldwide.
          </p>
        </section>

        {/* Mission & Values Section */}
        <section className="mission-values">
          <div className="section-header">
            <h2>Our Mission</h2>
          </div>
          <p>
            Our mission is to revolutionize sports spaces by combining cutting-edge technology with sustainable design principles. We aim to build more than just sports facilities—we create environments that inspire growth, teamwork, and excellence. We believe that the foundation of any thriving community is access to top-quality sports infrastructure, and we are here to make that a reality.
          </p>
          <h3>Our Core Values</h3>
          <ul>
            <li><strong>Innovation:</strong> We bring fresh, creative solutions to each project, pushing the boundaries of what is possible.</li>
            <li><strong>Excellence:</strong> We focus on delivering perfection in every aspect of design and execution.</li>
            <li><strong>Sustainability:</strong> We incorporate eco-friendly materials and construction practices in every project.</li>
            <li><strong>Integrity:</strong> We believe in transparency, honesty, and accountability with our clients and partners.</li>
            <li><strong>Community Impact:</strong> We are driven by the belief that sports can bring people together, fostering healthy and connected communities.</li>
          </ul>
        </section>

        {/* Our Services Section */}
        <section className="our-services">
        <div className="section-header">
          <h2>Our Services</h2>
        </div>
        <p className="services-description">
          Fitoverse offers a range of premium services tailored to provide the best in sports infrastructure. We specialize in designing and building state-of-the-art sports facilities and arenas, ensuring that every project is executed with precision, quality, and care.
        </p>
        <div className="service-list">
          <div className="service-item">
            <h3>Sports Turf Construction</h3>
            <p>We specialize in installing FIFA-approved synthetic turf for football, hockey, and other sports.</p>
          </div>
          <div className="service-item">
            <h3>Multi-Purpose Arena Design</h3>
            <p>Our team designs state-of-the-art arenas that can accommodate a variety of sports like basketball, volleyball, and more.</p>
          </div>
          <div className="service-item">
            <h3>Facility Management</h3>
            <p>We offer expert facility management services, ensuring that your sports complex stays in prime condition.</p>
          </div>
          <div className="service-item">
            <h3>Consultation & Planning</h3>
            <p>We provide expert consultancy services for designing, planning, and developing sports complexes that meet your needs.</p>
          </div>
          <div className="service-item">
            <h3>Turnkey Projects</h3>
            <p>We handle everything—from concept to execution, making the entire process smooth and stress-free for our clients.</p>
          </div>
        </div>
      </section>


        {/* Our Team Section */}
        <section className="our-team">
          <div className="section-header">
            <h2>Meet Our Team</h2>
          </div>
          <p>
            Our team is composed of visionary architects, skilled engineers, and experienced project managers who work tirelessly to deliver exceptional results. Together, we are committed to elevating the standard of sports infrastructure across the globe.
          </p>
        </section>

        {/* Contact Us Section */}
        <section className="contact-us">
          <div className="section-header">
            <h2>Get In Touch</h2>
          </div>
          <p>
            Ready to take your sports infrastructure project to the next level? Contact us today to discuss how we can bring your vision to life. Our team is here to help with every step of the process.
          </p>
          <button className="contact-button">Get In Touch</button>
        </section>
      </motion.div>
    </div>
  );
};

export default About;
