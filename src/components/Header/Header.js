import { Component } from 'react';
import HeaderImage from '../../assets/HeaderImage.png';
import Navbar from '../Navbar/Navbar';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-image-navbar">
                    <img className="header-image" src = {HeaderImage} />
                    <Navbar />
                </div>
                <div className = "header-bottom">
                    <div className = "header-bottom-content">
                        <div className = "header-bottom-content-number">11<sup>th</sup></div>
                        <div className = "header-bottom-content-text">Edition</div>
                    </div>
                    <div className = "header-bottom-content">
                        <div className = "header-bottom-content-number">5</div>
                        <div className = "header-bottom-content-text">Days</div>
                    </div>
                    <div className = "header-bottom-content">
                        <div className = "header-bottom-content-number">30+</div>
                        <div className = "header-bottom-content-text">Speakers</div>
                    </div>
                    <div className = "header-bottom-content">
                        <div className = "header-bottom-content-number">200+</div>
                        <div className = "header-bottom-content-text">College</div>
                    </div>
                    <div className = "header-bottom-content">
                        <div className = "header-bottom-content-number">1000+</div>
                        <div className = "header-bottom-content-text">Students</div>
                    </div>
                </div>
            </div>
        )
    }
}    