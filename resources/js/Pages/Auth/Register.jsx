import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
// import Logo from "../../images/logo-full.png";

const Register = ({ history }) => {
  const [registrationData, setRegistrationData] = useState({});
  const handleBlur = (e) => {
    const newRegistrationData = { ...registrationData };
    newRegistrationData[e.target.name] = e.target.value;
    setRegistrationData(newRegistrationData);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    history.push("/");
  };
  return (
    <>
      <div className="authincation h-100 p-meddle">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-md-6">
              <div className="authincation-content">
                <div className="row no-gutters">
                  <div className="col-xl-12">
                    <div className="auth-form">
                      <div className="text-center mb-3">
                        <Link to="/">
                          <img src={""} alt="Logo" />
                        </Link>
                      </div>
                      <h4 className="text-center mb-4 text-white">
                        Sign up your account
                      </h4>
                      <form action="" onSubmit={(e) => submitHandler(e)}>
                        <div className="form-group">
                          <label className="mb-1 text-white">
                            <strong>Username</strong>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="username"
                            onChange={handleBlur}
                          />
                        </div>
                        <div className="form-group">
                          <label className="mb-1 text-white">
                            <strong>Email</strong>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="hello@example.com"
                            onChange={handleBlur}
                          />
                        </div>
                        <div className="form-group">
                          <label className="mb-1 text-white">
                            <strong>Password</strong>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            defaultValue="Password"
                            onChange={handleBlur}
                          />
                        </div>
                        <div className="text-center mt-4">
                          <button
                            type="submit"
                            className="btn bg-white text-primary btn-block"
                          >
                            Sign me up
                          </button>
                        </div>
                      </form>
                      <div className="new-account mt-3">
                        <p className="text-white">
                          Already have an account?{" "}
                          <a className="text-white" href="/page-login">
                            Sign in
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
