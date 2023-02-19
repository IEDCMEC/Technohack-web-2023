import { Formik, useField, Field } from "formik";
import React from "react";
import * as Yup from "yup";

const Registration = () => {
  const initialValue = {
    teamName: "",
    teamLeaderName: "",
    institutionName: "",
    gradYear: "",
    email: "",
    linkedIn: "",
    GitHub: "",
    Devfolio: "",
    teamMember2: "",
    teamMember3: "",
    teamMember4: "",
    track: [],
    idea: "",
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
    linkedIn: Yup.string().min(4),
    GitHub: Yup.string().min(4),
    Devfolio: Yup.string().min(4),
    teamMember2: Yup.string().optional().min(3),
    teamMember3: Yup.string().optional().min(3),
    teamMember4: Yup.string().optional().min(3),
    idea: Yup.string().required().max(500),
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

  // const Checkbox = (props) => {
  //   return (
  //     <Field name={props.name}>
  //       {({ field, form }) => (
  //         <label>
  //           <input
  //             {...field}
  //             type="checkbox"
  //             checked={field.value.includes(props.value)}
  //             onChange={() => {
  //               const set = new Set(field.value);
  //               if (set.has(props.value)) {
  //                 set.delete(props.value);
  //               } else {
  //                 set.add(props.value);
  //               }
  //               field.onChange(field.name)(Array.from(set));
  //               form.setFieldTouched(field.name, true);
  //             }}
  //           />
  //           {props.value}
  //         </label>
  //       )}
  //     </Field>
  //   );
  // };
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

              <label htmlFor="linkedIn">LinkedIn</label>
              <input
                type="text"
                name="linkedIn"
                id="linkedIn"
                value={formik.values.linkedIn}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.linkedIn && formik.errors.linkedIn ? (
                <div>{formik.errors.linkedIn}</div>
              ) : null}

              <label htmlFor="GitHub">GitHub</label>
              <input
                type="text"
                name="GitHub"
                id="GitHub"
                value={formik.values.GitHub}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.GitHub && formik.errors.GitHub ? (
                <div>{formik.errors.GitHub}</div>
              ) : null}

              <label htmlFor="Devfolio">Devfolio</label>
              <input
                type="text"
                name="Devfolio"
                id="Devfolio"
                value={formik.values.Devfolio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.Devfolio && formik.errors.Devfolio ? (
                <div>{formik.errors.Devfolio}</div>
              ) : null}

              <label htmlFor="teamMember2">Team Member 2</label>
              <input
                type="text"
                name="teamMember2"
                id="teamMember2"
                value={formik.values.teamMember2}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.teamMember2 && formik.errors.teamMember2 ? (
                <div>{formik.errors.teamMember2}</div>
              ) : null}

              <label htmlFor="teamMember3">Team Member 3</label>
              <input
                type="text"
                name="teamMember3"
                id="teamMember3"
                value={formik.values.teamMember3}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.teamMember3 && formik.errors.teamMember3 ? (
                <div>{formik.errors.teamMember3}</div>
              ) : null}

              <label htmlFor="teamMember4">Team Member 4</label>
              <input
                type="text"
                name="teamMember4"
                id="teamMember4"
                value={formik.values.teamMember4}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.teamMember4 && formik.errors.teamMember4 ? (
                <div>{formik.errors.teamMember4}</div>
              ) : null}

              <label htmlFor="idea">Brief description of idea</label>
              <textarea
                type="text"
                name="idea"
                id="idea"
                value={formik.values.idea}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.idea && formik.errors.idea ? (
                <div>{formik.errors.idea}</div>
              ) : null}

              {/* <div>Track</div>
              <Checkbox name="track" value="admin" />
              <Checkbox name="track" value="customer" /> */}
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Registration;
