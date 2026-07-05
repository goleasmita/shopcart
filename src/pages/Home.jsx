import React from "react";
import "./Home.css";
import hero from "../assets/hero.png";
import Services from "./Services";
import About from "./About";
import Testimonial from "./Testimonial";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            {/* Left Content */}
            <div className="col-lg-6">
              <h5 className="hero-subtitle">Welcome to Our Website</h5>

              <h1 className="hero-title">
                Build Your Dream
                <span> Website</span>
              </h1>

              <p className="hero-text">
                We create beautiful, responsive and modern websites using React,
                Bootstrap and the latest web technologies. Start your digital
                journey today.
              </p>

              <div className="mt-4 hero-btn">
                <button className="btn btn-primary btn-lg me-3">
                  Get Started
                </button>

                <button className="btn btn-outline-light btn-lg">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 ">
              <img src={hero} alt="Hero" className="img-fluid hero-image" />
            </div>
          </div>
        </div>
      </section>

      <About />

      <Services />

      <Testimonial />
    </>
  );
}
