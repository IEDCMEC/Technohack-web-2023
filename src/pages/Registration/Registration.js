import { Formik, useField } from "formik";
import React from "react";
import * as Yup from "yup";

const Registration = () => {
  const initialValue = {
    teamName: "",
    teamLeaderName: "",
    institutionName: "",
    gradYear: "",
    email: "",
  };

  const validation = Yup.object({
    teamName: Yup.string().required("Please enter a valid Team name").min(3),
    teamLeaderName: Yup.string()
      .required("Please enter a valid Team Leader name")
      .min(3),
    institutionName: Yup.string()
      .required("Please enter a valid Institution name")
      .min(3),
    gradYear: Yup.string()
      .oneOf(
        ["2023", "2024", "2025", "2026", "2027"],
        "Invalid Graduation Year"
      )
      .required("Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Please enter a valid email ID"),
  });

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
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
            {/* TEAM NAME */}
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="teamName">Team Name</label>
              <input
                type="text"
                name="teamName"
                id="teamName"
                value={formik.values.teamName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.teamName && formik.errors.teamName ? (
                <div>{formik.errors.teamName}</div>
              ) : null}

              {/* TEAM LEADER NAME */}
              <label htmlFor="teamLeaderName">Team Leader Name</label>
              <input
                type="text"
                name="teamLeaderName"
                id="teamLeaderName"
                value={formik.values.teamLeaderName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.teamLeaderName && formik.errors.teamLeaderName ? (
                <div>{formik.errors.teamLeaderName}</div>
              ) : null}

              {/* INSTITUTION NAME */}
              <label htmlFor="institutionName">Institution Name</label>
              <input
                type="text"
                name="institutionName"
                id="institutionName"
                value={formik.values.institutionName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.institutionName &&
              formik.errors.institutionName ? (
                <div>{formik.errors.institutionName}</div>
              ) : null}

              <MySelect label="Graduation Year" name="gradYear">
                <option value="">Select</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
              </MySelect>

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
