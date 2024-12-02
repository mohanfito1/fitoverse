import React from "react";
import "./Flipbook.css";


const Flipbook = () => {
  return (
    <div className="flipbook-page">
      <h1>Our Catalogue</h1>
      <div className="flipbook-container">
        <iframe
          title="Flipbook"
          src="https://heyzine.com/flip-book/0b29fc46c6.html"
          width="100%"
          height="600"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Flipbook;
