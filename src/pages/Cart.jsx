import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/slice";
import { NavLink } from "react-router-dom";
import cart from "../assets/cart.png";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return (
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "90vh" }}>
        <img src={cart} alt="Empty Cart" width="180" />

        <h2 className="mt-4">Your Cart is Empty</h2>

        <p className="text-muted">Looks like you haven't added anything yet.</p>

        <NavLink
          to="/products"
          className="btn btn-primary px-4 "
          style={{
            borderRadius: "20px",
            backgroundColor: "#499CB3",
            border: "none",
          }}>
          Continue Shopping
        </NavLink>
      </div>
    );
  }

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const shipping = subTotal > 0 ? 0 : 0; //for free shipping

  const discount = 0; //change if you want to apply discount

  const total = subTotal + shipping - discount;

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  return (
    <section className="cart-section py-5 pt-5 mt-5">
      <div className="container">
        <h2 className="fw-bold mb-4">Shopping Cart</h2>

        <div className="row g-4">
          {/* Cart Items */}
          <div className="col-lg-8">
            {cartItems.map((v) => {
              return (
                <>
                  <div className="cart-card mb-3" key={v.id}>
                    <div className="row g-2 align-items-center">
                      <div className="col-lg-2 text-center">
                        <img
                          src={v.thumbnail}
                          alt={v.title}
                          className="product-img"
                        />
                      </div>

                      <div className="col-lg-4 ">
                        <h5 className="mb-1">{v.title}</h5>
                        <p className="text-muted mb-0">{v.tags[1]}</p>
                      </div>

                      <div className="col-lg-2 text-center">
                        <h6 className="fw-bold text-success">
                          ${v.price * v.quantity.toFixed(2)}
                        </h6>
                      </div>

                      <div className="col-lg-2">
                        <div className="qty-box">
                          <button
                            onClick={() => dispatch(decreaseQuantity(v.id))}>
                            -
                          </button>
                          <span>{v.quantity}</span>
                          <button
                            onClick={() => dispatch(increaseQuantity(v.id))}>
                            +
                          </button>
                        </div>
                      </div>

                      <div className="col-lg-2">
                        <button
                          className="btn btn-outline-danger w-100"
                          onClick={() => dispatch(removeFromCart(v.id))}>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
            <button
              className="btn btn-clear"
              onClick={() => dispatch(clearCart())}>
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="col-lg-4">
            <div className="summary-card">
              <h4 className="mb-4">Order Summary</h4>
              <div className="d-flex justify-content-between mb-3">
                <span>Total Items</span>
                <strong>{totalItems}</strong>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal</span>
                <strong>${subTotal.toFixed(2)}</strong>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Shipping</span>
                <strong>
                  {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </strong>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Discount</span>
                <strong>${discount.toFixed(2)}</strong>
              </div>

              <hr />

              <div className="d-flex justify-content-between mb-4">
                <h5>Total</h5>
                <h5 className="text-success">${total.toFixed(2)}</h5>
              </div>

              <button className="btn checkout-btn w-100">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
