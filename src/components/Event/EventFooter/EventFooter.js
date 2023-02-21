import "./EventFooter.css";
import Logo from "../../../assets/LogoWhite.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Footerbg from "../../../assets/footerbg.svg";
const Footer = () => {
  return (
    <div className="event-footer">
      <hr />
      <div className="container">
        {/* <img src={Footerbg} style={{position: 'absolute', zIndex:'0', left:'0'}} alt=''></img> */}
        <div style={{ zIndex: "10" }} className="logo">
          {/* <a
            href="http://iedcmec.in/"
            target="_blank"
            rel="noreferrer noopener"
          > */}
          <img src={Logo} alt="" className="iedc-logo" />
          {/* </a> */}
          <div style={{ zIndex: "10" }} className="socials">
            <a
              href="https://www.instagram.com/iedcmec"
              target="_blank "
              rel="noreferrer noopener"
            >
              <InstagramIcon sx={{ fontSize: "35px", color: "white" }} />
            </a>
            <a
              href="https://www.linkedin.com/company/iedcmec"
              target="_blank "
              rel="noreferrer noopener"
            >
              <LinkedInIcon sx={{ fontSize: "35px", color: "white" }} />
            </a>
            <a
              href="https://www.twitter.com/iedc_mec"
              target="_blank "
              rel="noreferrer noopener"
            >
              <TwitterIcon sx={{ fontSize: "35px", color: "white" }} />
            </a>
          </div>
        </div>

        <div style={{ zIndex: "10" }} className="description-container">
          <div className="description">
            <strong>
              Innovation and Entrepreneurship Development Cell <br />
            </strong>
            Govt. Model Engineering College <br />
            Thrikkakara, Kochi, Kerala 682021 <br />
            <a
              href="http://technohack.technopreneur.co.in/code-of-conduct"
              target="_blank"
              rel="noreferrer"
            >
              <span className="coc">Code of Conduct</span>
            </a>
            <br />
            technohack@iedcmec.in
            <br />
            <br />© 2023 IEDC MEC. All rights reserved.
          </div>
        </div>
        <div style={{ zIndex: "10" }} className="form-container">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScEd1YTm_P5iXw8IA-21bJOcPaJc_gOZqb9bMwiQajE41uGHw/viewform?usp=sf_link"
            target={"_blank"}
            rel="noreferrer"
          >
            Got any queries?
            <br />
            <span className="coc">Fill this form!</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
