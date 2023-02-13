import "./EventFooter.css";
import Logo from "../../../assets/LogoWhite.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <div className="event-footer">
      <div className="event-footer-margin"></div>
      <div className="container">
        <div className="logo">
          {/* <a
            href="http://iedcmec.in/"
            target="_blank"
            rel="noreferrer noopener"
          > */}
            <img src={Logo} alt="" className="iedc-logo" />
          {/* </a> */}
        </div>

        <div className="description-container">
          <div className="description">
            <strong>
              Innovation and Entrepreneurship Development Cell <br />
            </strong>
            Govt. Model Engineering College <br />
            Thrikkakara, Kochi, Kerala 682021 <br /> technohack@iedcmec.in
          </div>
        </div>

        <div className="socials">
          <a
            href="https://www.instagram.com/iedcmec"
            target="_blank "
            rel="noreferrer noopener"
          >
            <InstagramIcon sx={{fontSize:'35px', color:'white'}}/>
          </a>
          <a
            href="https://www.linkedin.com/company/iedcmec"
            target="_blank "
            rel="noreferrer noopener"
          >
            <LinkedInIcon sx={{fontSize:'35px', color:'white'}}/>
          </a>
          <a
            href="https://www.twitter.com/iedc_mec"
            target="_blank "
            rel="noreferrer noopener"
          >
          <TwitterIcon sx={{fontSize:'35px', color:'white'}}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
