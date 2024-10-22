import React from "react";
import { Link } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";

const Login = () => {
  return (
    <div className="container  vh-100  d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-primary">Econnect</h1>
      <div
        className="card shadow-lg border-0 w-100 my-3 "
        style={{ maxWidth: "450px" }}
      >
        <div className="card-body">
          <h2 className="text-center fw-bold">Login</h2>
          <form className="px-md-5 px-sm-3 py-3">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control py-2"
                placeholder="john@gmail.com"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control py-2"
                placeholder="***********"
                required
              />
            </div>

            <div className="mb-3 d-flex justify-content-between align-items-center">
              <div className=" form-check">
                <input
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe"
                  className="form-check-input"
                  required
                />
                <label htmlFor="rememberMe" className="form-check-label">
                  Remember Me
                </label>
              </div>
              <Link className="text-decoration-none">
                Forgot your password?
              </Link>
            </div>

            <button className="btn btn-primary w-100 fw-semibold py-2 mb-3">
              Login
            </button>

            <Link
              to="/register"
              className="d-block text-center text-black text-decoration-none"
            >
              Create New Account
              <GrFormNextLink size={20} />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
