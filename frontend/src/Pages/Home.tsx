import React from "react";

const Home: React.FC = () => {
  return (
    <section className="home">
      <div className="hero-content">
        <h1>Report corruption and make government accountable</h1>
        <p>
          Your voice matters. File red-flag or intervention reports directly to
          the authorities.
        </p>

        <div className="buttons">
          <button className="btn red-flag">File Red-Flag</button>
          <button className="btn intervention">Report Intervention</button>
        </div>
      </div>
    </section>
  );
};

export default Home;

