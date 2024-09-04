
import '../style/Cart.css'


import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { doCreateTestRequest } from "../testrequests/testRequestDispatcher";
import { errorHandler } from "../shared/common-helpers";
import { appNotification } from "../shared/notification/app-notification";

function Cart() {
  const history = useHistory();
  const [amountOfData, setAmountOfData] = useState(1);
  const [analysis, setAnalysis] = useState(false);
  const [isolation, setIsolation] = useState(false);

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const setQuote = () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    for (var i = 0; i < cartItems.length; i++) {
      doCreateTestRequest(cartItems[i]).subscribe((response) => {
        console.log("doCreateTestRequest", response);
        history.push("/user-history");
      }, errorHandler);
    }
    alert("Your quote has been successfully sent!");
  };

  const removeFromCart = (index) => {
    try {
      const updatedCart = [...cartItems];
      updatedCart.splice(index, 1);
      setCartItems(updatedCart);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      alert("Your product has been successfully removed from the cart!");
    } catch (error) {
      console.error("Error removing product from cart:", error);
      alert("Error removing product from cart. Please try again.");
    }
  };

  return (
    <section className="team_member section -padding">
      <div className="box">
        <div className="container ">
          <div className="base">
            <div className="container pb-5 mt-n2 mt-md-n3">
              <div className="row">
                <div className="col-xl-9 col-md-8">
                  <h2 className="h6 d-flex flex-wrap justify-content-between align-items-center px-4 py-3 bg-secondary">
                    <span>Products</span>
                    <a className="font-size-sm" href="/market">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-chevron-left"
                        style={{ width: "1rem", height: "1rem" }}
                      >
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                      Continue shopping
                    </a>
                  </h2>

                  {cartItems.map((item, index) => (
                    <div
                      className="d-sm-flex justify-content-between my-4 pb-3 border-bottom"
                      key={index}
                    >
                      <div className="media d-block d-sm-flex text-sm-left">
                        <a
                          className="cart-item-thumb mx-auto mr-sm-4 mt-3"
                          href="#"
                        >
                          <img
                            src={item.image}
                            alt="Product"
                            style={{ height: "150px", width: "150px" }}
                          />
                        </a>
                        <div className="media-body pt-3 mx-5">
                          <h3 className="product-card-title font-weight-semibold border-0 pb-0 mx-5">
                            {item.service}
                          </h3>
                          <div className="font-size-sm">
                            <span className="text-muted mr-2">Category:</span>{" "}
                            {item.category}
                          </div>
                          <div className="font-size-sm mt-2"></div>
                          <div className="font-size-lg text-primary mx-3 pb-0">
                            ${item.price}
                          </div>
                          <button
                            className="btn btn-outline-danger btn-sm btn-block mt-2"
                            type="button"
                            onClick={() => removeFromCart(index)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-trash-2 mr-1"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>{" "}
                            Remove
                          </button>
                        </div>
                      </div>

                      <div
                        className="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left"
                        style={{ maxWidth: "10rem" }}
                      >
                        <div className="form-outline">
                          <label
                            className="form-label mb-0"
                            htmlFor={`quantity_${index}`}
                          >
                            Quantity
                          </label>
                          <input
                            type="number"
                            id={`quantity_${index}`}
                            min={1}
                            className="form-control form-control-sm"
                            value={item.quantity}
                            onChange={(e) => {
                              const updatedCart = [...cartItems];
                              updatedCart[index].quantity =
                                parseInt(e.target.value, 10) || 1;
                              setCartItems(updatedCart);
                            }}
                          />
                        </div>
                        <div className="form-outline mt-2">
                          <label
                            className="form-label mb-0"
                            htmlFor={`amountOfData_${index}`}
                          >
                            Amount of Data (GB)
                          </label>
                          <input
                            type="number"
                            id={`amountOfData_${index}`}
                            min={1}
                            max={300}
                            className="form-control form-control-sm"
                            value={item.amountOfData}
                            onChange={(e) => {
                              const updatedCart = [...cartItems];
                              updatedCart[index].amountOfData =
                                parseInt(e.target.value, 10) || 1;
                              setCartItems(updatedCart);
                            }}
                          />
                        </div>
                        <div className="form-check mt-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={`analysis_${index}`}
                            checked={item.analysis}
                            onChange={(e) => {
                              const updatedCart = [...cartItems];
                              updatedCart[index].analysis = e.target.checked;
                              setCartItems(updatedCart);
                            }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`analysis_${index}`}
                          >Analysis Required
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={`isolation_${index}`}
                            checked={item.isolation}
                            onChange={(e) => {
                              const updatedCart = [...cartItems];
                              updatedCart[index].isolation = e.target.checked;
                              setCartItems(updatedCart);
                            }}
                          />

                          <label
                            className="form-check-label"
                            htmlFor={`isolation_${index}`}
                          >
                            Isolation Required
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="col-xl-3 col-md-4 pt-3 pt-md-0">
                  <div className="ibox-title bg-secondary">
                    <h2 className="h6 px-4 text-center">Cart Summary</h2>
                  </div>
                  <div className="ibox-title text-center shadow p-3 mb-5 bg-white sharp">
                    <span className="pull-right">
                      Total <strong>({cartItems.length})</strong> Items in Your
                      Cart.
                    </span>
                    <a
                      className="btn btn-primary btn-block mt-4 mb-3"
                      href="#"
                      onClick={() => setQuote()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-credit-card mr-2"
                      >
                        <rect
                          x="1"
                          y="4"
                          width="22"
                          height="16"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="1" y1="10" x2="23" y2="10"></line>
                      </svg>{" "}
                      Request a Quote
                    </a>
                  </div>

                  <div className="ibox ">
                    <div className="ibox-title mt-5">
                      <h2 className="h6 px-4 text-center">Support</h2>
                    </div>
                    <div className="ibox-content text-center shadow p-3 mb-5 bg-white sharp">
                      <h5>
                        <i className="fa fa-phone"></i> +91 9108896655
                      </h5>
                      <h5>
                        <i className="fa fa-phone"></i> info.molsys.in
                      </h5>
                      <span className="small">
                        Feel Free to Contact us if you have any Questions. We
                        are Available any Time.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
