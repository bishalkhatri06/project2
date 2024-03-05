import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth/authIndex";

const LogIn = () => {
  const navigate = useNavigate();
  const { user } = isAuthenticated();
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    redirectedTo: false,
  });

  // destructuring values
  const { email, password, error, redirectedTo } = values;

  // handleChange
  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  // onSubmit
  const handleSubmit = (e) => {
    // to disable form action event
    e.preventDefault();
    setValues({ ...values, error: false });

    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        // setValues({...values,redirectedTo:true})
        authenticate(data, () => {
          setValues({ ...values, redirectedTo: true });
        });
      }
    });
  };

  // to redirect user
  const redirectedUser = () => {
    if (redirectedTo) {
      // navigate('/products')

      if (user && user.role === 1) {
        return navigate("/admin/dashboard");
      } else {
        navigate("/profile");
      }
    }
  };

  // to show error message
  const showError = () =>
    error && <div className="alert alert-danger">{error}</div>;

  return (
    <>
      <div className="container my-3 col-4">
        <div className="shadow p-4 ">
          <form>
            {showError()}
            {redirectedUser()}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleChange("email")}
                value={email}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={handleChange("password")}
                value={password}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <div className="my-2">
              <div className="d-flex justify-content-between">
                <Link to='/forgetpassword' className="text-decoration-none">Forget Passwod</Link>
                <Link to='/register' className="text-decoration-none">Account Instead</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
