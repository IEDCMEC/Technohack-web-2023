import "./EventFooter.css";
import Logo from "../../assets/LogoWhite.png";
import Twitter from "../../assets/twitter_blue.png";
import Instagram from "../../assets/instagram_blue.png";
import LinkedIn from "../../assets/linkedin_blue.png";

const Footer = () => {
    return (
        <div className="event-footer">
            <div className="event-footer-margin"></div>
            <div className="container">
                <div className="logo">
                    <a href="http://iedcmec.in/" target="_blank" rel="noreferrer noopener">
                        <img src={Logo} alt="" />
                    </a>
                </div>

                <div className="description-container">
                    <div className="description">
                        <strong>
                            Innovation and Entrepreneurship Development Cell{" "}
                            <br />
                        </strong>
                        Govt. Model Engineering College <br />
                        Thrikkakara, Kochi, Kerala 682021 <br /> iedc@mec.ac.in
                    </div>
                </div>

                <div className={"socials"}>
                    <a
                        href="https://www.instagram.com/iedcmec"
                        target="_blank " rel="noreferrer noopener"
                    >
                        <img src={Instagram} alt="" />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/iedcmec"
                        target="_blank " rel="noreferrer noopener"
                    >
                        <img src={LinkedIn} alt="" />
                    </a>
                    <a href="https://www.twitter.com/iedc_mec" target="_blank " rel="noreferrer noopener">
                        <img src={Twitter} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
