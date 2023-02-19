import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const Registration = () => {
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const validation = Yup.object({
    firstName: Yup.string().required("Please add a valid project name").min(3),
    lastName: Yup.string().required("Please add a valid project name").min(3),
    email: Yup.string()
      .email("Invalid email address")
      .required("Please enter a valid email ID"),
  });

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };
  return (
    <>
      <Formik
        initialValues={initialValue}
        validationSchema={validation}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <div>
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
              ) : null}

              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
              ) : null}

              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                name="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}

              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Registration;
