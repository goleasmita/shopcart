import React, { useEffect, useState } from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slice";
import { FaRegStar, FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [categoryValue, setCategoryValue] = useState("all");
  const [price, setPrice] = useState(3000);
  const [rating, setRating] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;

  const currentProducts = filter.slice(firstProductIndex, lastProductIndex);

  const totalPages = Math.ceil(filter.length / productsPerPage);

  const handleCategory = (category, text) => {
    setCategoryValue(category);
    setSelectedCategory(text);
    setShowDropdown(false);
    setCurrentPage(1);

    applyFilters(category, price, rating);
  };

  const handlePriceFilter = (value) => {
    setPrice(value);
    setCurrentPage(1);

    applyFilters(categoryValue, value, rating);
  };

  const applyFilters = (category, maxPrice, minRating) => {
    let products = [...data];

    // Category
    if (category !== "all") {
      products = products.filter((item) => item.category === category);
    }

    // Price
    products = products.filter((item) => item.price <= maxPrice);

    // Rating
    if (minRating > 0) {
      products = products.filter((item) => item.rating >= minRating);
    }

    setFilter(products);
  };

  const handleRatingFilter = (value) => {
    setRating(value);
    setCurrentPage(1);

    applyFilters(categoryValue, price, value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const apiData = await res.json();

      setData(apiData.products);
      setFilter(apiData.products);
    };
    fetchData();
  }, []);

  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    const alreadyInCart = cartItems.find((item) => item.id === product.id);
    if (alreadyInCart) {
      alert("Product Is Already In Cart");
      return;
    }
    dispatch(addToCart(product));
    alert("Added To Cart");
  };

  const filterData = (cat) => {
    const result = data.filter((v) => v.category === cat);
    setFilter(result);
  };

  return (
    <>
      <div className="product-section">
        <div className="container py-5">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3 mb-4">
              <div className="filter-card">
                <h4 className="mb-4">Filters</h4>

                {/* Categories */}
                <h6>Category</h6>

                <div className="custom-dropdown mb-4">
                  <div
                    className="dropdown-header"
                    onClick={() => setShowDropdown(!showDropdown)}>
                    <span>{selectedCategory}</span>
                    <span>{showDropdown ? "▲" : "▼"}</span>
                  </div>

                  {showDropdown && (
                    <div className="dropdown-list">
                      <div
                        className="dropdown-option"
                        onClick={() => handleCategory("all", "All Categories")}>
                        All Categories
                      </div>

                      <div
                        className="dropdown-option"
                        onClick={() => handleCategory("beauty", "Beauty")}>
                        Beauty
                      </div>

                      <div
                        className="dropdown-option"
                        onClick={() =>
                          handleCategory("fragrances", "Fragrances")
                        }>
                        Fragrances
                      </div>

                      <div
                        className="dropdown-option"
                        onClick={() =>
                          handleCategory("furniture", "Furniture")
                        }>
                        Furniture
                      </div>

                      <div
                        className="dropdown-option"
                        onClick={() =>
                          handleCategory("groceries", "Groceries")
                        }>
                        Groceries
                      </div>
                    </div>
                  )}
                </div>

                {/* Price */}
                <h6 className="mt-4">Price Range</h6>

                <input
                  type="range"
                  min="0"
                  max="3000"
                  value={price}
                  onChange={(e) => handlePriceFilter(Number(e.target.value))}
                  className="form-range"
                />

                <div className="d-flex justify-content-between">
                  <span>$0</span>
                  <strong>${price}</strong>
                </div>

                {/* Rating */}
                <h6>Rating</h6>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="rating"
                    checked={rating === 4.5}
                    onChange={() => handleRatingFilter(4.5)}
                  />
                  <label className="form-check-label">
                    ⭐⭐⭐⭐⭐ (4.5 & Up)
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="rating"
                    checked={rating === 4}
                    onChange={() => handleRatingFilter(4)}
                  />
                  <label className="form-check-label">⭐⭐⭐⭐ & Up</label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="rating"
                    checked={rating === 3}
                    onChange={() => handleRatingFilter(3)}
                  />
                  <label className="form-check-label">⭐⭐⭐ & Up</label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="rating"
                    checked={rating === 0}
                    onChange={() => handleRatingFilter(0)}
                  />
                  <label className="form-check-label">All Ratings</label>
                </div>

                {/* Stock */}
                <h6>Availability</h6>

                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">In Stock</label>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="col-lg-9 " style={{ marginTop: "70px" }}>
              <div className="row g-4">
                {currentProducts.map((v) => (
                  <div
                    className="col-xxl-4 col-xl-6 col-lg-6  col-md-6"
                    key={v.id}>
                    <div className="card h-100">
                      <NavLink to={`/detail/${v.id}`}>
                        <img
                          src={v.images[0]}
                          className="card-img-top"
                          alt={v.title}
                        />
                      </NavLink>

                      <div className="card-body">
                        <h5 className="card-title">
                          {v.title.slice(0, 20)}...
                        </h5>

                        <div className="ratings pb-2">
                          {[1, 2, 3, 4, 5].map((star) =>
                            star <= Math.round(v.rating) ? (
                              <FaStar key={star} color="#de6d6dfa" />
                            ) : (
                              <FaRegStar key={star} color="#ccc" />
                            ),
                          )}
                          <span className="ms-2">{v.rating}</span>
                        </div>

                        <p className="card-text">
                          {v.description.slice(0, 60)}...
                        </p>

                        <div className="d-flex justify-content-evenly align-items-center">
                          <button className="btn btn-outline-light">
                            ${v.price}
                          </button>

                          <button
                            className="btn btn-primary"
                            onClick={() => handleAddToCart(v)}>
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-center mt-5">
                <nav>
                  <ul className="pagination">
                    <li
                      className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                      <button
                        className="page-link"
                        onClick={() => setCurrentPage(currentPage - 1)}>
                        Previous
                      </button>
                    </li>

                    {[...Array(totalPages)].map((_, index) => (
                      <li
                        key={index}
                        className={`page-item ${
                          currentPage === index + 1 ? "active" : ""
                        }`}>
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(index + 1)}>
                          {index + 1}
                        </button>
                      </li>
                    ))}

                    <li
                      className={`page-item ${
                        currentPage === totalPages ? "disabled" : ""
                      }`}>
                      <button
                        className="page-link"
                        onClick={() => setCurrentPage(currentPage + 1)}>
                        Next
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
