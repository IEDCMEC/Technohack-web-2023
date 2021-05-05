import { Component } from 'react';
import { Link } from "react-router-dom";
import './Workshops.css';
import TechnoHackBanner from "../../../assets/technohack_banner.jpeg";
import TechnoLogo from "../../../assets/technohacklogo.jpg";
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';
import AngelConnectLogo from "../../../assets/angelconnect_black.png";
import AngelConnectBanner from "../../../assets/invest.jpg";
import dsworkshop from '../../../assets/datasciencews.jpg'
import pmworkshop from '../../../assets/pmws.jpg'
import aworkshop from '../../../assets/abroadws.jpg'
import iotworkshop from '../../../assets/iotws.jpg'
import Modal from '../Modal/Modal'

export default class Workshops extends Component {
    constructor(props){
        super(props);
        this.state={
            modal:false,
            track:""
        }
    }
    render() {
        return (
                <div className="workshops" id="workshops">
                
                <BackgroundAnimation />
                
                    <div className="section-heading-workshopss">Workshops</div>
                    <div className="workshops-container" style={{zIndex:this.state.modal ? 0 : 200}}>
                    
                        <div className="workshops-box">
                            <div className="workshops-image-container">
                                <img className="workshops-image" src={dsworkshop} />
                            </div>
                            <div className="workshops-text">
                                <p className="workshops-text-name-container-hackathon">
                                    Data Science
                                </p>
                                <p className="workshops-subtext-name-container-hackathon">
                                    Samir Madhavan
                                </p>
                                {/* <p className="workshops-text-designation">Hackathon</p> */}
                                <div onClick={()=>{this.setState({modal:true, track:"ds"})}} to="/technohack" className="workshops-button">
                                    Learn More
                                </div>
                            </div>
                        </div>
                        <div className="workshops-box">
                            <div className="workshops-image-container">
                                <img className="workshops-image" id="angelconnet-image-banner" src={pmworkshop} />

                            </div>
                            <div className="workshops-text">
                                <p className="workshops-text-name-container-hackathon">
                                    Product Management
                                </p>
                                <p className="workshops-subtext-name-container-hackathon">
                                    Nikita Mallya
                                </p>
                                {/* <p className="workshops-text-designation">Hackathon</p> */}
                                <div onClick={()=>{this.setState({modal:true, track:"pm"})}} className="workshops-button">
                                    Learn More
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="workshops-container-2" style={{zIndex:this.state.modal ? 0 : 200}}>
                    
                        <div className="workshops-box">
                            <div className="workshops-image-container">
                                <img className="workshops-image" src={aworkshop} />
                            </div>
                            <div className="workshops-text">
                                <p className="workshops-text-name-container-hackathon">
                                    Higher Study track in Europe
                                </p>
                                <p className="workshops-subtext-name-container-hackathon">
                                    Amal Jose Vallavanthara
                                </p>
                                {/* <p className="workshops-text-designation">Hackathon</p> */}
                                <div onClick={()=>{this.setState({modal:true, track:"as"})}} to="/technohack" className="workshops-button">
                                    Learn More
                                </div>
                            </div>
                        </div>
                        <div className="workshops-box">
                            <div className="workshops-image-container">
                                <img className="workshops-image" id="angelconnet-image-banner" src={iotworkshop} />

                            </div>
                            <div className="workshops-text">
                                <p className="workshops-text-name-container-hackathon">
                                    IoT
                                </p>
                                <p className="workshops-subtext-name-container-hackathon">
                                    Salman Faris
                                </p>
                                {/* <p className="workshops-text-designation">Hackathon</p> */}
                                <div onClick={()=>{this.setState({modal:true, track:"iot"})}} className="workshops-button">
                                    Learn More
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    {
                    this.state.modal ? <Modal close = {()=>this.setState({modal:false})} track={this.state.track}/> : null
                }
                </div>
        )
    }
};