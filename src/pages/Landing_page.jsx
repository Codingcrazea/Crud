// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Landing_page.css';

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-center text-white">
        <div className="container py-5">
          <h1 className="display-4 fw-bold">Welcome to MyApp</h1>
          <p className="lead mt-3">
            Your ultimate tool for managing tasks efficiently and with ease.
          </p>
          <Link to="/user-list" className="btn btn-primary mt-4 px-4 py-2">Explore More</Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section py-5">
        <div className="container text-center">
          <h2 className="mb-5">Features</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <h4>Simple User Management</h4>
              <p>Add, edit, and delete users with ease.</p>
            </div>
            <div className="col-md-4 mb-4">
              <h4>Data Visualization</h4>
              <p>View user data in a structured, table format.</p>
            </div>
            <div className="col-md-4 mb-4">
              <h4>Seamless Navigation</h4>
              <p>Easily navigate between forms and lists.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer bg-dark text-white pt-4 pb-3">
        <div className="container text-center">
          <p className="mb-2">Follow us on:</p>
          <div className="d-flex justify-content-center mb-3">
            <a href="https://facebook.com" className="text-white mx-2">Facebook</a> | 
            <a href="https://twitter.com" className="text-white mx-2">Twitter</a> | 
            <a href="https://linkedin.com" className="text-white mx-2">LinkedIn</a>
          </div>
          <div className="text-muted">
            &copy; 2024 MyApp. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
