import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { authResetState, login } from "../features/auth/authSlice";
import { toast } from "react-toastify";

const INITIAL_FORM_DATA = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { isSuccess, isError, message } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      toast.success(message, {
        toastId: "success",
      });
      navigate("/");
      setFormData(INITIAL_FORM_DATA);
    } else if (isError) {
      toast.error(message, {
        toastId: "error",
      });
    }
    dispatch(authResetState());
  }, [isSuccess, isError, message, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="container  vh-100  d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-primary">Econnect</h1>
      <div
        className="card shadow-lg border-0 w-100 my-3 "
        style={{ maxWidth: "450px" }}
      >
        <div className="card-body">
          <h2 className="text-center fw-bold">Login</h2>
          <form className="px-md-5 px-sm-3 py-3" onSubmit={handleSubmit}>
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
                value={formData.email || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="d-flex position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="form-control py-2"
                  placeholder="***********"
                  value={formData.password || ""}
                  onChange={handleChange}
                  autoComplete="password"
                  required
                />
                <button
                  type="button"
                  className="btn position-absolute end-0"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
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
              <Link className="text-decoration-none" to="#">
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
