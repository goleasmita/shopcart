import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import "./Detail.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slice";

export default function ProductDetailPage() {
  const [data, setData] = useState({});
  const [similar, setSimilar] = useState([]);

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    const alreadyInCart = cartItems.find((item) => item.id === product.id);
    if (alreadyInCart) {
      alert("Product is already in cart");
      return;
    }
    dispatch(addToCart(product));
    alert("Added to cart");
  };

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const apiData = await res.json();
      setData(apiData);

      const similarRes = await fetch(
        `https://dummyjson.com/products/category/${apiData.category}`,
      );
      const similarData = await similarRes.json();
      const similarFilter = similarData.products.filter(
        (prod) => prod.id !== apiData.id,
      );
      setSimilar(similarFilter);
    };
    fetchData();
  }, [id]);

  return (
    <div className="detailpage">
      <div className="product-detail  ">
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* Product Image */}

            <div className="col-lg-5">
              <div className="product-image-box">
                <img
                  src={data.images?.[0]}
                  alt={data.title}
                  className="img-fluid product-image"
                />
              </div>
            </div>

            {/* Product Details */}

            <div className="col-lg-7">
              <span className="badge bg-success mb-3">In Stock</span>

              <h2 className="product-title">{data.title}</h2>

              <p className="text-muted">
                {data.brand} | {data.category}
              </p>

              <div className="ratings pb-2 d-flex align-items-center">
                {[1, 2, 3, 4, 5].map((star) =>
                  star <= Math.round(data.rating || 0) ? (
                    <FaStar key={star} color="#f56262" />
                  ) : (
                    <FaRegStar key={star} color="#ccc" />
                  ),
                )}

                <span className="ms-2 fw-semibold">{data.rating}</span>
              </div>

              <h2 className="product-price mb-4">${data.price}</h2>

              <p className="product-description">{data.description}</p>

              <hr />

              <div className="row mb-4">
                <div className="col-6">
                  <h6>Availability</h6>
                  <p>{data.stock} Items Left</p>
                </div>

                <div className="col-6">
                  <h6>Shipping</h6>
                  <p>Free Delivery</p>
                </div>
              </div>

              <div className="d-flex gap-3">
                <button
                  className="btn btn-cart"
                  onClick={() => handleAddToCart(data)}>
                  Add To Cart
                </button>

                <button className="btn btn-buy">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h4>Similar Items</h4>

      <div className="container mb-5">
        <div className="row">
          {similar.map((v) => {
            return (
              <div className="col-lg-3 col-md-6" key={v.id}>
                <div className="card h-100">
                  <NavLink to={`/detail/${v.id}`}>
                    <img
                      src={v.images[0]}
                      className="card-img-top"
                      alt={v.title}
                    />
                  </NavLink>

                  <div className="card-body">
                    <h5 className="card-title">{v.title.slice(0, 20)}...</h5>

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

                    <p className="card-text">{v.description.slice(0, 60)}...</p>

                    <div className="d-flex justify-content-between align-items-center">
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
