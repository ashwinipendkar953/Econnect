import React from "react";
import { Link } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";

const Register = () => {
  return (
    <div className="container w-100 my-3 d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-primary">Econnect</h1>
      <div
        className="card shadow-lg border-0 w-100 my-3"
        style={{ maxWidth: "450px" }}
      >
        <div className="card-body">
          <h2 className="text-center fw-bold">Signup</h2>
          <form className="px-md-5 px-sm-3 py-3">
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="form-control py-2"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                className="form-control py-2"
                placeholder="johndoe"
                required
              />
            </div>

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

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="confirmPassword"
                id="confirmPassword"
                name="confirmPassword"
                className="form-control py-2"
                placeholder="***********"
                required
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                name="acceptTerms"
                id="acceptTerms"
                className="form-check-input"
                required
              />
              <label htmlFor="acceptTerms" className="form-check-label">
                I accept all Terms & Conditions
              </label>
            </div>

            <button className="btn btn-primary w-100 fw-semibold py-2 mb-3">
              Create New Account
            </button>

            <Link
              to="/login"
              className="d-block text-center text-black text-decoration-none"
            >
              Already have an account
              <GrFormNextLink size={20} />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
