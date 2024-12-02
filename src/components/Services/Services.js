import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <div className="coming-soon-animation">
        <h1>Services & Maintenance</h1>
        <p>We provide comprehensive maintenance for sports turfs and grounds.</p>
        <div className="animation-circle">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
        <h2>Coming Soon...</h2>
      </div>
    </div>
  );
};

export default Services;
