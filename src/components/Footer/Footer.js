import { Component } from 'react';
import './Footer.css';
import insta from '../../assets/Footer/insta.svg'
import linkedin from '../../assets/Footer/linkedin.svg'
import twitter from '../../assets/Footer/twitter.svg'
import Logo from '../../assets/Footer/Logo.svg'

export default class Footer extends Component {
    render() {
        return (
           <div className="footer-container">
                <div className="footer-iedc-logo">
                    <a href="http://iedcmec.in/" target="_blank">
                        <img className= "footer-iedc-image" src={Logo}/>
                    </a>
                </div>
                <div className="footer-copy">
                    <h4 className="footer-h4">Innovation and Entrepreneurship Development Cell</h4>
                    <div className="footer-address">
                        <p className="footer-p">Govt. Model Engineering College</p>
                        <p className="footer-p">Thrikkakara, Kochi, Kerala 682021</p>
                        <p className="footer-p">iedc@mec.ac.in</p>
                    </div>
                </div>
                <div className="footer-social">
                    <a className="footer-insta" href="https://www.instagram.com/iedcmec/" target="_blank" rel="noreferrer noopener">
                        <img className= "footer-insta-image" src={insta}/>
                    </a>
                    <a className="footer-linkedin" href="https://www.linkedin.com/company/iedcmec" target="_blank" rel="noreferrer noopener">
                        <img className= "footer-linkedin-image" src={linkedin}/>
                    </a>
                    <a className="footer-twitter" href="https://twitter.com/iedc_mec" target="_blank" rel="noreferrer noopener">
                        <img className= "footer-twitter-image" src={twitter}/>
                    </a>
                </div>
           </div> 

        )
    }
}