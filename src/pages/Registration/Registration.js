import { Formik, useField, Field } from "formik";
import React from "react";
import "./Registration.css";
import * as Yup from "yup";
import {
  Autocomplete,
  createTheme,
  TextField,
  ThemeProvider,
} from "@mui/material";

const Registration = () => {
  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "&:hover .MuiOutlinedInput-notchedOutline": {
              color: "#fff",
              border: "2px solid #fff",
              outline: "none",
              borderRadius: "8px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              color: "#fff",
              border: "2px solid #fff",
              outline: "none",
              borderRadius: "8px",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              color: "#fff",
              border: "2px solid #fff",
              outline: "none",
              borderRadius: "8px",
            },
            "& .MuiChip-root": {
              backgroundColor: "#00a1ea",
              color: "white",
            },
            "& .MuiChip-deleteIcon": { color: "#fff !important" },
            minHeight: "150%",
          },
        },
      },
    },
  });
  const initialValue = {
    teamName: "",
    teamLeaderName: "",
    leaderInstitutionName: "",
    leaderGradYear: "",
    leaderEmail: "",
    leaderLinkedIn: "",
    leaderGitHub: "",
    leaderDevfolio: "",
    teamMember2Name: "",
    teamMember2InstitutionName: "",
    teamMember2GradYear: "",
    teamMember2Email: "",
    teamMember2LinkedIn: "",
    teamMember2GitHub: "",
    teamMember2Devfolio: "",
    teamMember3Name: "",
    teamMember3InstitutionName: "",
    teamMember3GradYear: "",
    teamMember3Email: "",
    teamMember3LinkedIn: "",
    teamMember3GitHub: "",
    teamMember3Devfolio: "",
    teamMember4Name: "",
    teamMember4InstitutionName: "",
    teamMember4GradYear: "",
    teamMember4Email: "",
    teamMember4LinkedIn: "",
    teamMember4GitHub: "",
    teamMember4Devfolio: "",
    track: [],
    idea: "",
  };

  const validation = Yup.object({
    teamName: Yup.string().required("Please enter a valid Team name").min(3),
    teamLeaderName: Yup.string()
      .required("Please enter a valid Team Leader name")
      .min(3),
    leaderInstitutionName: Yup.string()
      .required("Please enter a valid Institution name")
      .min(3),
    leaderGradYear: Yup.string()
      .oneOf(
        ["2023", "2024", "2025", "2026", "2027"],
        "Invalid Graduation Year"
      )
      .required("Required"),
    leaderEmail: Yup.string()
      .email("Invalid email address")
      .required("Please enter a valid email ID"),
    leaderLinkedIn: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .required("Please enter website")
      .min(4),
    leaderGitHub: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .required("Please enter website")
      .min(4),
    leaderDevfolio: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .required("Please enter website")
      .min(4),
    teamMember2Name: Yup.string().optional().min(3),
    teamMember2InstitutionName: Yup.string().optional().min(3),
    teamMember2GradYear: Yup.string()
      .optional()
      .oneOf(
        ["2023", "2024", "2025", "2026", "2027"],
        "Invalid Graduation Year"
      ),
    teamMember2Email: Yup.string().optional().email("Invalid email address"),
    teamMember2LinkedIn: Yup.string()
      .optional()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .min(4),
    teamMember2GitHub: Yup.string()
      .optional()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .min(4),
    teamMember2Devfolio: Yup.string()
      .optional()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .min(4),
    teamMember4Name: Yup.string().optional().min(3),
    teamMember4InstitutionName: Yup.string().optional().min(3),
    teamMember4GradYear: Yup.string()
      .optional()
      .oneOf(
        ["2023", "2024", "2025", "2026", "2027"],
        "Invalid Graduation Year"
      ),
    teamMember4Email: Yup.string().optional().email("Invalid email address"),
    teamMember4LinkedIn: Yup.string()
      .optional()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )

      .min(4),
    teamMember4GitHub: Yup.string()
      .optional()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )

      .min(4),
    teamMember4Devfolio: Yup.string()
      .optional()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )

      .min(4),
    teamMember3Name: Yup.string().optional().min(3),
    teamMember3InstitutionName: Yup.string().optional().min(3),
    teamMember3GradYear: Yup.string()
      .oneOf(
        ["2023", "2024", "2025", "2026", "2027"],
        "Invalid Graduation Year"
      )
      .optional(),
    teamMember3Email: Yup.string().email("Invalid email address").optional(),
    teamMember3LinkedIn: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .optional()
      .min(4),
    teamMember3GitHub: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .optional()
      .min(4),
    teamMember3Devfolio: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .optional()
      .min(4),
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

  return (
    <>
      <Formik
        initialValues={initialValue}
        validationSchema={validation}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <div className="reg">
            <div className="registration_heading">TechnoHack Registration</div>
            {/* TEAM NAME */}
            <form onSubmit={formik.handleSubmit}>
              <div className="inputGroup">
                <label htmlFor="teamName" className="team-detail-heading">
                  Team Name
                </label>
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
              </div>
              {/* TEAM LEADER NAME */}
              <div className="team-detail-heading">Team Leader Details</div>
              <div className="row">
                <div className="inputGroup">
                  <label htmlFor="teamLeaderName">Name</label>
                  <input
                    type="text"
                    name="teamLeaderName"
                    id="teamLeaderName"
                    value={formik.values.teamLeaderName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.teamLeaderName &&
                  formik.errors.teamLeaderName ? (
                    <div>{formik.errors.teamLeaderName}</div>
                  ) : null}
                </div>
                <div className="inputGroup">
                  {/* INSTITUTION NAME */}
                  <label htmlFor="leaderInstitutionName">
                    Institution Name
                  </label>
                  <input
                    type="text"
                    name="leaderInstitutionName"
                    id="leaderInstitutionName"
                    value={formik.values.leaderInstitutionName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.leaderInstitutionName &&
                  formik.errors.leaderInstitutionName ? (
                    <div>{formik.errors.leaderInstitutionName}</div>
                  ) : null}
                </div>
              </div>
              <div className="row">
                <div className="inputGroup">
                  <label>Graduation Year</label>
                  <select label="Graduation Year" name="leaderGradYear">
                    <option value="">Select</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                  </select>
                </div>

                <div className="inputGroup">
                  <label htmlFor="leaderEmail">Email Address</label>
                  <input
                    type="text"
                    name="leaderEmail"
                    id="leaderEmail"
                    value={formik.values.leaderEmail}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.leaderEmail && formik.errors.leaderEmail ? (
                    <div>{formik.errors.leaderEmail}</div>
                  ) : null}
                </div>
              </div>
              <div className="row">
                <div className="inputGroup">
                  <label htmlFor="leaderLinkedIn">LinkedIn</label>
                  <input
                    type="text"
                    name="leaderLinkedIn"
                    id="leaderLinkedIn"
                    value={formik.values.leaderLinkedIn}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.leaderLinkedIn &&
                  formik.errors.leaderLinkedIn ? (
                    <div>{formik.errors.leaderLinkedIn}</div>
                  ) : null}
                </div>
                <div className="inputGroup">
                  <label htmlFor="leaderGitHub">GitHub</label>
                  <input
                    type="text"
                    name="leaderGitHub"
                    id="leaderGitHub"
                    value={formik.values.leaderGitHub}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.leaderGitHub && formik.errors.leaderGitHub ? (
                    <div>{formik.errors.leaderGitHub}</div>
                  ) : null}
                </div>
                <div className="inputGroup">
                  <label htmlFor="leaderDevfolio">Devfolio</label>
                  <input
                    type="text"
                    name="leaderDevfolio"
                    id="leaderDevfolio"
                    value={formik.values.leaderDevfolio}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.leaderDevfolio &&
                  formik.errors.leaderDevfolio ? (
                    <div>{formik.errors.leaderDevfolio}</div>
                  ) : null}
                  <hr />
                </div>
              </div>
              <div className="team-detail-heading">Team Member 2 Details</div>
              <div className="row">
                <div className="inputGroup">
                  <label htmlFor="teamLeaderName">Name</label>
                  <input
                    type="text"
                    name="teamLeaderName"
                    id="teamLeaderName"
                    value={formik.values.teamLeaderName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.teamLeaderName &&
                  formik.errors.teamLeaderName ? (
                    <div>{formik.errors.teamLeaderName}</div>
                  ) : null}
                </div>
                <div className="inputGroup">
                  {/* INSTITUTION NAME */}
                  <label htmlFor="leaderInstitutionName">
                    Institution Name
                  </label>
                  <input
                    type="text"
                    name="leaderInstitutionName"
                    id="leaderInstitutionName"
                    value={formik.values.leaderInstitutionName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.leaderInstitutionName &&
                  formik.errors.leaderInstitutionName ? (
                    <div>{formik.errors.leaderInstitutionName}</div>
                  ) : null}
                </div>
              </div>
              <div className="row">
                <div className="inputGroup">
                  <label>Graduation Year</label>
                  <select label="Graduation Year" name="leaderGradYear">
                    <option value="">Select</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                  </select>
                </div>

                <div className="inputGroup">
                  <label htmlFor="leaderEmail">Email Address</label>
                  <input
                    type="text"
                    name="leaderEmail"
                    id="leaderEmail"
                    value={formik.values.leaderEmail}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.leaderEmail && formik.errors.leaderEmail ? (
                    <div>{formik.errors.leaderEmail}</div>
                  ) : null}
                </div>
              </div>
              <div className="row">
                <div className="inputGroup">
                  <label htmlFor="leaderLinkedIn">LinkedIn</label>
                  <input
                    type="text"
                    name="leaderLinkedIn"
                    id="leaderLinkedIn"
                    value={formik.values.leaderLinkedIn}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.leaderLinkedIn &&
                  formik.errors.leaderLinkedIn ? (
                    <div>{formik.errors.leaderLinkedIn}</div>
                  ) : null}
                </div>
                <div className="inputGroup">
                  <label htmlFor="leaderGitHub">GitHub</label>
                  <input
                    type="text"
                    name="leaderGitHub"
                    id="leaderGitHub"
                    value={formik.values.leaderGitHub}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.leaderGitHub && formik.errors.leaderGitHub ? (
                    <div>{formik.errors.leaderGitHub}</div>
                  ) : null}
                </div>
                <div className="inputGroup">
                  <label htmlFor="leaderDevfolio">Devfolio</label>
                  <input
                    type="text"
                    name="leaderDevfolio"
                    id="leaderDevfolio"
                    value={formik.values.leaderDevfolio}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.leaderDevfolio &&
                  formik.errors.leaderDevfolio ? (
                    <div>{formik.errors.leaderDevfolio}</div>
                  ) : null}
                  <hr />
                </div>
              </div>
              <div className="team-detail-heading">Team Member 3 Details</div>

              <div className="row">
                <div className="inputGroup">
                  <label htmlFor="teamLeaderName">Name</label>
                  <input
                    type="text"
                    name="teamLeaderName"
                    id="teamLeaderName"
                    value={formik.values.teamLeaderName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.teamLeaderName &&
                  formik.errors.teamLeaderName ? (
                    <div>{formik.errors.teamLeaderName}</div>
                  ) : null}
                </div>
                <div className="inputGroup">
                  {/* INSTITUTION NAME */}
                  <label htmlFor="leaderInstitutionName">
                    Institution Name
                  </label>
                  <input
                    type="text"
                    name="leaderInstitutionName"
                    id="leaderInstitutionName"
                    value={formik.values.leaderInstitutionName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.leaderInstitutionName &&
                  formik.errors.leaderInstitutionName ? (
                    <div>{formik.errors.leaderInstitutionName}</div>
                  ) : null}
                </div>
              </div>
              <div className="row">
                <div className="inputGroup">
                  <label>Graduation Year</label>
                  <select label="Graduation Year" name="leaderGradYear">
                    <option value="">Select</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                  </select>
                </div>

                <div className="inputGroup">
                  <label htmlFor="leaderEmail">Email Address</label>
                  <input
                    type="text"
                    name="leaderEmail"
                    id="leaderEmail"
                    value={formik.values.leaderEmail}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.leaderEmail && formik.errors.leaderEmail ? (
                    <div>{formik.errors.leaderEmail}</div>
                  ) : null}
                </div>
              </div>
              <div className="row">
                <div className="inputGroup">
                  <label htmlFor="leaderLinkedIn">LinkedIn</label>
                  <input
                    type="text"
                    name="leaderLinkedIn"
                    id="leaderLinkedIn"
                    value={formik.values.leaderLinkedIn}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.leaderLinkedIn &&
                  formik.errors.leaderLinkedIn ? (
                    <div>{formik.errors.leaderLinkedIn}</div>
                  ) : null}
                </div>
                <div className="inputGroup">
                  <label htmlFor="leaderGitHub">GitHub</label>
                  <input
                    type="text"
                    name="leaderGitHub"
                    id="leaderGitHub"
                    value={formik.values.leaderGitHub}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.leaderGitHub && formik.errors.leaderGitHub ? (
                    <div>{formik.errors.leaderGitHub}</div>
                  ) : null}
                </div>
                <div className="inputGroup">
                  <label htmlFor="leaderDevfolio">Devfolio</label>
                  <input
                    type="text"
                    name="leaderDevfolio"
                    id="leaderDevfolio"
                    value={formik.values.leaderDevfolio}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.leaderDevfolio &&
                  formik.errors.leaderDevfolio ? (
                    <div>{formik.errors.leaderDevfolio}</div>
                  ) : null}
                  <hr />
                </div>
              </div>
              <div className="team-detail-heading">Team Member 4 Details</div>

              <div className="row">
                <div className="inputGroup">
                  <label htmlFor="teamLeaderName">Name</label>
                  <input
                    type="text"
                    name="teamLeaderName"
                    id="teamLeaderName"
                    value={formik.values.teamLeaderName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.teamLeaderName &&
                  formik.errors.teamLeaderName ? (
                    <div>{formik.errors.teamLeaderName}</div>
                  ) : null}
                </div>
                <div className="inputGroup">
                  {/* INSTITUTION NAME */}
                  <label htmlFor="leaderInstitutionName">
                    Institution Name
                  </label>
                  <input
                    type="text"
                    name="leaderInstitutionName"
                    id="leaderInstitutionName"
                    value={formik.values.leaderInstitutionName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.leaderInstitutionName &&
                  formik.errors.leaderInstitutionName ? (
                    <div>{formik.errors.leaderInstitutionName}</div>
                  ) : null}
                </div>
              </div>
              <div className="row">
                <div className="inputGroup">
                  <label>Graduation Year</label>
                  <select label="Graduation Year" name="leaderGradYear">
                    <option value="">Select</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                  </select>
                </div>

                <div className="inputGroup">
                  <label htmlFor="leaderEmail">Email Address</label>
                  <input
                    type="text"
                    name="leaderEmail"
                    id="leaderEmail"
                    value={formik.values.leaderEmail}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.leaderEmail && formik.errors.leaderEmail ? (
                    <div>{formik.errors.leaderEmail}</div>
                  ) : null}
                </div>
              </div>
              <div className="row">
                <div className="inputGroup">
                  <label htmlFor="leaderLinkedIn">LinkedIn</label>
                  <input
                    type="text"
                    name="leaderLinkedIn"
                    id="leaderLinkedIn"
                    value={formik.values.leaderLinkedIn}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.leaderLinkedIn &&
                  formik.errors.leaderLinkedIn ? (
                    <div>{formik.errors.leaderLinkedIn}</div>
                  ) : null}
                </div>
                <div className="inputGroup">
                  <label htmlFor="leaderGitHub">GitHub</label>
                  <input
                    type="text"
                    name="leaderGitHub"
                    id="leaderGitHub"
                    value={formik.values.leaderGitHub}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.leaderGitHub && formik.errors.leaderGitHub ? (
                    <div>{formik.errors.leaderGitHub}</div>
                  ) : null}
                </div>
                <div className="inputGroup">
                  <label htmlFor="leaderDevfolio">Devfolio</label>
                  <input
                    type="text"
                    name="leaderDevfolio"
                    id="leaderDevfolio"
                    value={formik.values.leaderDevfolio}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.leaderDevfolio &&
                  formik.errors.leaderDevfolio ? (
                    <div>{formik.errors.leaderDevfolio}</div>
                  ) : null}
                  <hr />
                </div>
              </div>

              <label htmlFor="idea" className="team-detail-heading">
                Brief Description of Idea
              </label>
              <textarea
                type="text"
                rows={10}
                name="idea"
                id="idea"
                value={formik.values.idea}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.idea && formik.errors.idea ? (
                <div>{formik.errors.idea}</div>
              ) : null}
              <label htmlFor="idea" className="team-detail-heading">
                Any Interesting Problem You have in mind to solve during the
                hackathon?
              </label>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    gap: "0.5rem",
                  }}
                >
                  <input type="radio" value="Yes" />
                  <label>Yes</label>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    gap: "0.5rem",
                  }}
                >
                  <input type="radio" value="No" />
                  <label>No</label>
                </div>
              </div>
              <label htmlFor="idea" className="team-detail-heading">
                Probable Tracks you may be applying for ?
              </label>
              <ThemeProvider theme={theme}>
                <Autocomplete
                  options={["CyberSecurity", "Blockchain", "HealthCare"]}
                  sx={{ width: "90%" }}
                  multiple
                  disableCloseOnSelect
                  renderInput={(params) => (
                    <TextField {...params}/>
                  )}
                />
              </ThemeProvider>
              <label htmlFor="idea" className="team-detail-heading">
                Anything else you want to let us know ?
              </label>
              <textarea
                type="text"
                rows={10}
                name="idea"
                id="idea"
                value={formik.values.idea}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div type="submit" className="submit-btn">
                Submit
              </div>
            </form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Registration;
