import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="logo">iReporter</div>
      <nav>
        <a href="/">Home</a>
        <a href="/signup">Sign Up</a>
        <a href="/login">Login</a>
      </nav>
    </header>
  );
};

export default Navbar;
