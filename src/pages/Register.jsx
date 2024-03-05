import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signup } from "../auth/authIndex";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // to show error message
  const showError = () =>
    error && <div className="alert alert-danger">{error}</div>;

  // to show success message
  const showSuccess = () =>
    success && (
      <div className="alert alert-success">account successfully created</div>
    );

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        cpassword: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("Full Name is mandatory")
          .max(20, "20 character or less"),
        email: Yup.string()
          .required("Email is mandatory")
          .email("Invalid Email format"),
        password: Yup.string()
          .required("Password is required")
          .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!?_.&])[A-Za-z\d@!?_.&]{8,50}$/,
            "password contain at least one character, one number, one special character and password greater than 8 and less than 50 characters"
          ),
        cpassword: Yup.string()
          .required("Confirm Password is mandatory")
          .oneOf(
            [Yup.ref("password"), null],
            "confirm password and password doesnot match"
          ),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        signup(values)
          .then((data) => {
            if (data.error) {
              setError(data.error);
              setSuccess(false);
            } else {
              setSuccess(true);
              resetForm();
              setError("");
            }
            setSubmitting(false);
          })
          .catch((err) => {
            console.log(err);
            setSubmitting(false);
          });
      }}
    >
      <div className="container my-3">
        <div className="shadow p-4">
          <Form>
            {showError()}
            {showSuccess()}
            <div className="mb-2">
              <label htmlFor="fname">Full Name</label>
              <Field
                type="text"
                name="name"
                id="fname"
                className="form-control"
              />
              <ErrorMessage name="fname">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="mb-2">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                id="email"
                className="form-control"
              />
              <ErrorMessage name="email">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="mb-2">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                id="password"
                className="form-control"
              />
              <ErrorMessage name="password">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="mb-2">
              <label htmlFor="cpassword">Confirm Password</label>
              <Field
                type="password"
                name="cpassword"
                id="cpassword"
                className="form-control"
              />
              <ErrorMessage name="cpassword">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
            </div>

            <div className="mb-2">
              <button className="btn btn-primary">Register</button>
            </div>
          </Form>
        </div>
      </div>
    </Formik>
  );
};

export default Register;
