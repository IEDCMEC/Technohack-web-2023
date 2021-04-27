import { Component } from 'react';
import HeaderImage1 from '../../assets/HeaderImage1.png';
import HeaderImage2 from '../../assets/HeaderImage2.png';
import HeaderImage3 from '../../assets/HeaderImage3.png';
import HeaderImage4 from '../../assets/HeaderImage4.png';
import FadeIn from 'react-fade-in';
import Navbar from '../Navbar/Navbar';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="fade">
                    <FadeIn
                        delay={500}
                        transitionDuration={1000}
                    >
                        <div className="header-image-navbar">
                            <img className="header-image" src={HeaderImage1} />
                        </div>
                        <div className="header-image-navbar">
                            <img className="header-image techno_logo_on_top" src={HeaderImage2} />
                        </div>
                        <div className="header-image-navbar last_one">
                            <img className="header-image ksum_img" src={HeaderImage4} />
                            <img className="header-image tie_img" src={HeaderImage3} />
                        </div>
                        <div className="header-image-navbar">
                            
                        </div>
                        <div className="nav">
                            <Navbar />
                        </div>
                    </FadeIn>
                </div>
                <div className="header-bottom">
                    <div className="row1">
                        <div className="header-bottom-content">
                            <div className="header-bottom-content-number">11<sup>th</sup></div>
                            <hr style={{ border: 0, height: 1, backgroundColor: "grey"}} />
                            <div className="header-bottom-content-text">Edition</div>
                        </div>
                    </div>
                    <div className="row2">
                        <div className="element1">
                            <div className="header-bottom-content">
                                <div className="header-bottom-content-number">3</div>
                                <hr style={{ border: 0, height: 1, backgroundColor: "grey"}} />
                                <div className="header-bottom-content-text">Days</div>
                            </div>
                        </div>
                        <div >
                            <div className="header-bottom-content">
                                <div className="header-bottom-content-number">10+</div>
                                <hr style={{ border: 0, height: 1, backgroundColor: "grey"}} />
                                <div className="header-bottom-content-text">Speakers</div>
                            </div>
                        </div>
                    </div>
                    <div className="row3">
                        <div className="element2">
                            <div className="header-bottom-content">
                                <div className="header-bottom-content-number">200+</div>
                                <hr style={{ border: 0, height: 1, backgroundColor: "grey"}} />
                                <div className="header-bottom-content-text">Colleges</div>
                            </div>
                        </div>
                        <div >
                            <div className="header-bottom-content">
                                <div className="header-bottom-content-number">1000+</div>
                                <hr style={{ border: 0, height: 1, backgroundColor: "grey"}} />
                                <div className="header-bottom-content-text">Participants</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}    