import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "./Home.css";
import heroImage from "../../assets/home.jpeg"; // Update with your image path

const HomePage = () => {
  // Variants for animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <motion.section
        className="hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 1 }}
      >
        <div className="overlay">
          <h1>Building Communities with the Best Sports Flooring Systems</h1>
        </div>
      </motion.section>

      {/* Our Services Section */}
      <motion.section
        className="services"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <h2>Our Services</h2>
        <div className="services-list">
          {[
            {
              title: "Design",
              desc: "We create cutting-edge sports court designs tailored to your specific needs.",
            },
            {
              title: "Consultation",
              desc: "Expert guidance to help you choose sports flooring systems that meet international standards.",
            },
            {
              title: "Construction",
              desc: "Building courts with certified, globally recognized sports flooring systems for durability and performance.",
            },
            {
              title: "Virtual Reality (VR) Integration",
              desc: "Experience your court design like never before! With our new VR technology, you can explore and interact with your customized sports court design before construction.",
            },
          ].map((service, index) => (
            <motion.div
              className="service-item"
              key={index}
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Global Presence Section */}
      <motion.section
        className="global-presence"
        initial="hidden"
        animate="visible"
        variants={slideIn}
        transition={{ duration: 1 }}
      >
        <h2>Global Presence</h2>
        <p>
          Proud member of IAKS - the International Association for Sports and Leisure Facilities, ensuring all our projects adhere to global excellence in sports infrastructure.
        </p>
      </motion.section>

      {/* New Information Section */}
      <motion.section
        className="core-info"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 1 }}
      >
        <h2>Why Choose Us?</h2>
        <p>
          Fitoverse is dedicated to creating world-class sports facilities that not only meet but exceed international standards. We
          use state-of-the-art technology and certified materials to ensure durability, performance, and aesthetics.
        </p>
        <ul>
          <li>Innovative designs crafted by experts.</li>
          <li>Certified, globally recognized sports flooring systems.</li>
          <li>Commitment to fostering community health and inclusion.</li>
        </ul>
      </motion.section>

      {/* Projects at a Glance Section */}
      <motion.section
        className="projects"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 1 }}
      >
        <h2>Projects at a Glance</h2>
        <div className="projects-stats">
          <p>2,00,000+ sq. ft. built across diverse sports facilities.</p>
          <p>30+ completed projects, creating a positive impact in communities worldwide.</p>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="cta"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 1 }}
      >
        <h2>Have a design in mind? Let’s bring it to life!</h2>
        <p>
          Experience your court design in Virtual Reality before construction. <strong>[Book a Free Slot]</strong> to
          interact with your personalized design.
        </p>
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Contact us for expert guidance and start building your dream court today.
        </motion.button>
      </motion.section>
    </div>
  );
};

export default HomePage;
