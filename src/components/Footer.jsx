import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container py-5">
          <div className="row">
            {/* Logo */}
            <div className="col-lg-4 col-md-6 mb-4">
              <h2 className="logo">
                Shop<span>Cart</span>
              </h2>

              <p className="mt-3 text-light">
                ShopKart is your one-stop destination for fashion, electronics,
                beauty, and lifestyle products at the best prices.
              </p>

              <div className="social-icons mt-4">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6 mb-4">
              <h5>Quick Links</h5>

              <ul className="list-unstyled">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/shop">Shop</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>

            {/* Customer */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5>Customer Service</h5>

              <ul className="list-unstyled">
                <li>
                  <NavLink to="/faq">FAQ</NavLink>
                </li>
                <li>
                  <NavLink to="/shipping-policy">Shipping</NavLink>
                </li>
                <li>
                  <NavLink to="/return-policy">Returns</NavLink>
                </li>
                <li>
                  <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5>Contact</h5>

              <p>Email : support@shopkart.com</p>
              <p>Phone : +91 98765 43210</p>
              <p>Mumbai, Maharashtra</p>

              <div className="payment mt-3">
                <FaCcVisa />
                <FaCcMastercard />
                <FaCcPaypal />
              </div>
            </div>
          </div>

          <hr className="border-secondary" />

          <div className="d-md-flex justify-content-between align-items-center text-center">
            <p className="mb-2">© 2026 ShopKart. All Rights Reserved.</p>

            <p className="mb-0">Designed with ❤️ by ShopKart</p>
          </div>
        </div>
      </footer>
    </>
  );
}
