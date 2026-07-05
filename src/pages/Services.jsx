import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaSearch,
  FaHeadset,
} from "react-icons/fa";
import "./Services.css";

export default function Services() {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      desc: "Modern, responsive and high-performance websites built with the latest technologies.",
    },
    {
      icon: <FaLaptopCode />,
      title: "UI/UX Design",
      desc: "Creative and user-friendly interfaces that improve customer experience.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Responsive",
      desc: "Fully responsive websites that work perfectly on every device.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Graphic Design",
      desc: "Professional branding, banners, logos and promotional graphics.",
    },
    {
      icon: <FaSearch />,
      title: "SEO Optimization",
      desc: "Improve your search rankings and grow your online visibility.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "Reliable technical support whenever you need assistance.",
    },
  ];

  return (
    <section className="services-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h5 className="text-warning fw-bold">OUR SERVICES</h5>
          <h2 className="fw-bold display-5">What We Offer</h2>
          <p className="text-light">
            We provide innovative digital solutions to help your business grow.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>

                <h4>{service.title}</h4>

                <p>{service.desc}</p>

                <button className="btn btn-warning rounded-pill px-4">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
