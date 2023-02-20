import { Formik } from "formik";
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
    suggestions: "",
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
    console.log("Clicked");
    // alert(JSON.stringify(values, null, 2));
    console.log("Values",values)
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
                  <label htmlFor="leaderLinkedIn">LinkedIn URL</label>
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
                  <label htmlFor="leaderGitHub">GitHub URL</label>
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
                  <label htmlFor="leaderDevfolio">Devfolio URL</label>
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
                  <label htmlFor="teamMember2Name">Name</label>
                  <input
                    type="text"
                    name="teamMember2Name"
                    id="teamMember2Name"
                    value={formik.values.teamMember2Name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.teamMember2Name &&
                  formik.errors.teamMember2Name ? (
                    <div>{formik.errors.teamMember2Name}</div>
                  ) : null}
                </div>
                <div className="inputGroup">
                  {/* INSTITUTION NAME */}
                  <label htmlFor="teamMember2InstitutionName">
                    Institution Name
                  </label>
                  <input
                    type="text"
                    name="teamMember2InstitutionNameteamMember2InstitutionName"
                    id="teamMember2InstitutionName"
                    value={formik.values.teamMember2InstitutionName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.teamMember2InstitutionName &&
                  formik.errors.teamMember2InstitutionName ? (
                    <div>{formik.errors.teamMember2InstitutionName}</div>
                  ) : null}
                </div>
              </div>
              <div className="row">
                <div className="inputGroup">
                  <label>Graduation Year</label>
                  <select label="Graduation Year" name="teamMember2GradYear">
                    <option value="">Select</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                  </select>
                </div>

                <div className="inputGroup">
                  <label htmlFor="teamMember2Email">Email Address</label>
                  <input
                    type="text"
                    name="teamMember2Email"
                    id="teamMember2Email"
                    value={formik.values.teamMember2Email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.teamMember2Email &&
                  formik.errors.teamMember2Email ? (
                    <div>{formik.errors.teamMember2Email}</div>
                  ) : null}
                </div>
              </div>
              <div className="row">
                <div className="inputGroup">
                  <label htmlFor="teamMember2LinkedIn">LinkedIn URL</label>
                  <input
                    type="text"
                    name="teamMember2LinkedIn"
                    id="teamMember2LinkedIn"
                    value={formik.values.teamMember2LinkedIn}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.teamMember2LinkedIn &&
                  formik.errors.teamMember2LinkedIn ? (
                    <div>{formik.errors.teamMember2LinkedIn}</div>
                  ) : null}
                </div>
                <div className="inputGroup">
                  <label htmlFor="teamMember2GitHub">GitHub URL</label>
                  <input
                    type="text"
                    name="teamMember2GitHub"
                    id="teamMember2GitHub"
                    value={formik.values.teamMember2GitHub}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.teamMember2GitHub &&
                  formik.errors.teamMember2GitHub ? (
                    <div>{formik.errors.teamMember2GitHub}</div>
                  ) : null}
                </div>
                <div className="inputGroup">
                  <label htmlFor="teamMember2Devfolio">Devfolio URL</label>
                  <input
                    type="text"
                    name="teamMember2Devfolio"
                    id="teamMember2Devfolio"
                    value={formik.values.teamMember2Devfolio}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.teamMember2Devfolio &&
                  formik.errors.teamMember2Devfolio ? (
                    <div>{formik.errors.teamMember2Devfolio}</div>
                  ) : null}
                  <hr />
                </div>
              </div>
              <div className="team-detail-heading">Team Member 3 Details</div>

              <div className="row">
                <div className="inputGroup">
                  <label htmlFor="teamMember3Name">Name</label>
                  <input
                    type="text"
                    name="teamMember3Name"
                    id="teamMember3Name"
                    value={formik.values.teamMember3Name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.teamMember3Name &&
                  formik.errors.teamMember3Name ? (
                    <div>{formik.errors.teamMember3Name}</div>
                  ) : null}
                </div>
                <div className="inputGroup">
                  {/* INSTITUTION NAME */}
                  <label htmlFor="teamMember3InstitutionName">
                    Institution Name
                  </label>
                  <input
                    type="text"
                    name="teamMember3InstitutionName"
                    id="teamMember3InstitutionName"
                    value={formik.values.teamMember3InstitutionName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.teamMember3InstitutionName &&
                  formik.errors.teamMember3InstitutionName ? (
                    <div>{formik.errors.teamMember3InstitutionName}</div>
                  ) : null}
                </div>
              </div>
              <div className="row">
                <div className="inputGroup">
                  <label>Graduation Year</label>
                  <select label="Graduation Year" name="teamMember3GradYear">
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
                    name="teamMember3Email"
                    id="teamMember3Email"
                    value={formik.values.teamMember3Email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.teamMember3Email &&
                  formik.errors.teamMember3Email ? (
                    <div>{formik.errors.teamMember3Email}</div>
                  ) : null}
                </div>
              </div>
              <div className="row">
                <div className="inputGroup">
                  <label htmlFor="teamMember3LinkedIn">LinkedIn URL</label>
                  <input
                    type="text"
                    name="teamMember3LinkedIn"
                    id="teamMember3LinkedIn"
                    value={formik.values.teamMember3LinkedIn}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.teamMember3LinkedIn &&
                  formik.errors.teamMember3LinkedIn ? (
                    <div>{formik.errors.teamMember3LinkedIn}</div>
                  ) : null}
                </div>
                <div className="inputGroup">
                  <label htmlFor="teamMember3GitHub">GitHub URL</label>
                  <input
                    type="text"
                    name="teamMember3GitHub"
                    id="teamMember3GitHub"
                    value={formik.values.teamMember3GitHub}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.teamMember3GitHub &&
                  formik.errors.teamMember3GitHub ? (
                    <div>{formik.errors.teamMember3GitHub}</div>
                  ) : null}
                </div>
                <div className="inputGroup">
                  <label htmlFor="teamMember3Devfolio">Devfolio URL</label>
                  <input
                    type="text"
                    name="teamMember3Devfolio"
                    id="teamMember3Devfolio"
                    value={formik.values.teamMember3Devfolio}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.teamMember3Devfolio &&
                  formik.errors.teamMember3Devfolio ? (
                    <div>{formik.errors.teamMember3Devfolio}</div>
                  ) : null}
                  <hr />
                </div>
              </div>
              <div className="team-detail-heading">Team Member 4 Details</div>

              <div className="row">
                <div className="inputGroup">
                  <label htmlFor="teamMember4Name">Name</label>
                  <input
                    type="text"
                    name="teamMember4Name"
                    id="teamMember4Name"
                    value={formik.values.teamMember4Name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.teamMember4Name &&
                  formik.errors.teamMember4Name ? (
                    <div>{formik.errors.teamMember4Name}</div>
                  ) : null}
                </div>
                <div className="inputGroup">
                  {/* INSTITUTION NAME */}
                  <label htmlFor="teamMember4InstitutionName">
                    Institution Name
                  </label>
                  <input
                    type="text"
                    name="teamMember4InstitutionName"
                    id="teamMember4InstitutionName"
                    value={formik.values.teamMember4InstitutionName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.teamMember4InstitutionName &&
                  formik.errors.teamMember4InstitutionName ? (
                    <div>{formik.errors.teamMember4InstitutionName}</div>
                  ) : null}
                </div>
              </div>
              <div className="row">
                <div className="inputGroup">
                  <label>Graduation Year</label>
                  <select label="Graduation Year" name="teamMember4GradYear">
                    <option value="">Select</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                  </select>
                </div>

                <div className="inputGroup">
                  <label htmlFor="teamMember4Email">Email Address</label>
                  <input
                    type="text"
                    name="teamMember4Email"
                    id="teamMember4Email"
                    value={formik.values.teamMember4Email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.teamMember4Email &&
                  formik.errors.teamMember4Email ? (
                    <div>{formik.errors.teamMember4Email}</div>
                  ) : null}
                </div>
              </div>
              <div className="row">
                <div className="inputGroup">
                  <label htmlFor="teamMember4LinkedIn">LinkedIn URL</label>
                  <input
                    type="text"
                    name="teamMember4LinkedIn"
                    id="teamMember4LinkedIn"
                    value={formik.values.teamMember4LinkedIn}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.teamMember4LinkedIn &&
                  formik.errors.teamMember4LinkedIn ? (
                    <div>{formik.errors.teamMember4LinkedIn}</div>
                  ) : null}
                </div>
                <div className="inputGroup">
                  <label htmlFor="teamMember4GitHub">GitHub URL</label>
                  <input
                    type="text"
                    name="teamMember4GitHub"
                    id="teamMember4GitHub"
                    value={formik.values.teamMember4GitHub}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.teamMember4GitHub &&
                  formik.errors.teamMember4GitHub ? (
                    <div>{formik.errors.teamMember4GitHub}</div>
                  ) : null}
                </div>
                <div className="inputGroup">
                  <label htmlFor="teamMember4Devfolio">Devfolio URL</label>
                  <input
                    type="text"
                    name="teamMember4Devfolio"
                    id="teamMember4Devfolio"
                    value={formik.values.teamMember4Devfolio}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.teamMember4Devfolio &&
                  formik.errors.teamMember4Devfolio ? (
                    <div>{formik.errors.teamMember4Devfolio}</div>
                  ) : null}
                  <hr />
                </div>
              </div>
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
                  <input type="radio" value="Yes" name="problem" />
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
                  <input type="radio" value="No" name="problem" />
                  <label>No</label>
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
                Probable Tracks you may be applying for ?
              </label>
              <ThemeProvider theme={theme}>
                <Autocomplete
                  options={["CyberSecurity", "Blockchain", "HealthCare"]}
                  sx={{ width: "90%" }}
                  multiple
                  disableCloseOnSelect
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{
                        input: { color: "white", fontFamily: "Montserrat" },
                      }}
                    />
                  )}
                />
              </ThemeProvider>
              <label htmlFor="suggestions" className="team-detail-heading">
                Anything else you want to let us know ?
              </label>
              <textarea
                type="text"
                rows={10}
                name="suggestions"
                id="suggestions"
                value={formik.values.suggestions}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <button
                type="submit"
                className="submit-btn"
                onClick={
                  handleSubmit
                }
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Registration;
