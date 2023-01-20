import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="content">
          <p>Call us</p>
          <p>1-800-123-4567</p>
          <p>Because Money</p>
          <p>Doesn't come with instructions</p>
          <button href="/home" className="button">
            Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
