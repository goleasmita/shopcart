import React from "react";
import "./About.css";
import { FaAward, FaCheckCircle, FaRocket, FaUsers } from "react-icons/fa";
import code from "../assets/code.png";

export default function About() {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img src={code} alt="About" className="img-fluid about-img" />
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <h5 className="text-uppercase   mt-0  fw-bold">About Us</h5>
            <h2 className="fw-bold mb-4">
              We Build Amazing Digital Experiences
            </h2>

            <p className="text-muted">
              We help businesses grow by creating modern, responsive and
              user-friendly websites. Our experienced team focuses on quality,
              innovation, and customer satisfaction.
            </p>

            <div className="row mt-4">
              <div className="col-md-6 mb-3">
                <div className="feature-box">
                  <FaCheckCircle className="icon" />
                  <span>Professional Team</span>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="feature-box">
                  <FaAward className="icon" />
                  <span>Quality Services</span>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="feature-box">
                  <FaUsers className="icon" />
                  <span>Happy Clients</span>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="feature-box">
                  <FaRocket className="icon" />
                  <span>Fast Delivery</span>
                </div>
              </div>
            </div>

            <button className="btn btn-primary px-4 py-2 mt-3">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
