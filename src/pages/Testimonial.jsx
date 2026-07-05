import React from "react";
import "./Testimonial.css";
import { FaStar, FaQuoteLeft, FaRegStar } from "react-icons/fa";
import img from "../assets/testimonial (1).jpg";
import img2 from "../assets/testimonial (2).jpg";
import img3 from "../assets/testimonial (3).jpg";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    course: "Full Stack Development",
    image: img,
    rating: 5,
    review:
      "The best web development institute! The trainers explain every topic with practical examples. I built multiple live projects during the course.",
  },
  {
    id: 2,
    name: "Priya Patel",
    course: "MERN Stack",
    image: img2,
    rating: 4,
    review:
      "Amazing learning experience. The placement guidance and interview preparation helped me gain confidence and improve my skills.",
  },
  {
    id: 3,
    name: "Amit Verma",
    course: "React JS",
    image: img3,
    rating: 5,
    review:
      "Excellent faculty, practical assignments, and a friendly environment. I highly recommend ShopKart Institute to anyone interested in web development.",
  },
];

export default function Testimonials() {
  return (
    <>
      {/* Hero Section */}
      <section className="testimonial-hero  text-center d-flex align-items-center ">
        <div className="container">
          <h1 className="fw-bold pt-5 ">Student Testimonials</h1>
          <p className="lead ">
            Hear what our students say about their learning journey at
            <strong> ShopKart Web Development Institute</strong>.
          </p>

          <button className="btn btn-lg btn-test ">Join Our Courses</button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-light ">
        <div className="container">
          <div className="row g-4">
            {testimonials.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.id}>
                <div className="card testimonial-card border-0  h-100">
                  <div className="card-body text-center p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-circle testimonial-img mb-3"
                    />

                    <FaQuoteLeft className="quote-icon mb-3" />

                    <p className="text-muted">"{item.review}"</p>

                    <div className="rating">
                      {[...Array(5)].map((_, index) =>
                        index < item.rating ? (
                          <FaStar key={index} className="star filled" />
                        ) : (
                          <FaRegStar key={index} className="star empty" />
                        ),
                      )}
                    </div>

                    <h5>{item.name}</h5>

                    <small className="text-primary">{item.course}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats-section py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3">
              <h2>500+</h2>
              <p>Students Trained</p>
            </div>

            <div className="col-md-3">
              <h2>50+</h2>
              <p>Batches Completed</p>
            </div>

            <div className="col-md-3">
              <h2>95%</h2>
              <p>Placement Support</p>
            </div>

            <div className="col-md-3">
              <h2>4.9★</h2>
              <p>Student Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            Why Students Love ShopKart?
          </h2>

          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="box">
                💻
                <h5 className="mt-3">Live Projects</h5>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="box">
                🎓
                <h5 className="mt-3">Expert Trainers</h5>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="box">
                💼
                <h5 className="mt-3">Placement Assistance</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section text-center  py-5">
        <div className="container">
          <h2 className="fw-bold">Ready to Start Your Career?</h2>

          <p className="mt-3">
            Join ShopKart Web Development Institute today and become a
            professional Full Stack Developer.
          </p>

          <button className="btn  btn-lg mt-3">Enroll Now</button>
        </div>
      </section>
    </>
  );
}
