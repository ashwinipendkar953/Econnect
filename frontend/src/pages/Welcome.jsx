import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="container p-4 ">
      <div className="row w-100 vh-100 d-flex justify-content-center align-items-center g-4">
        <div className="col-md-6 me-lg-5 pt-4" style={{ maxWidth: "350px" }}>
          <h1 className="display-4 fw-semibold text-primary">Econnect</h1>
          <div className="py-md-5 py-sm-3 text-uppercase">
            <h2 className="text-xs fw-semibold mb-3">
              <span className="fs-1 fw-bold text-grey">Follow</span>
              <span className="fs-7"> People around the globe</span>
            </h2>
            <h2 className="text-xs fw-semibold mb-3">
              <span className="fs-1 fw-bold text-grey">Connect</span>
              <span className="fs-7"> with your friends</span>
            </h2>
            <h2 className="text-xs fw-semibold mb-3">
              <span className="fs-1 fw-bold text-grey">Share</span>{" "}
              <span className="fs-7">what you thinking</span>
            </h2>
          </div>
          <Link className="w-100 btn btn-primary rounded-0 fs-5" to="/register">
            Join Now{" "}
          </Link>
          <div className="text-center mt-2">
            Already have an account?{" "}
            <Link className="text-decoration-none fw-semibold" to="/login">
              Sign in
            </Link>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block overflow-hidden">
          <img src="/assets/hero1.svg" alt="Hero" style={{ height: "500px" }} />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
