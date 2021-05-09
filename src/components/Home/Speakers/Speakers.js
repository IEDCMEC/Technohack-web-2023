import { Component } from 'react';
import './Speakers.css';
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';
import Modal from '../SpeakerModal/Modal';
import dsworkshop from '../../../assets/datasciencews.jpg'
import pmworkshop from '../../../assets/pmws.jpg'
import aworkshop from '../../../assets/abroadws.jpg'
import iotworkshop from '../../../assets/iotws.jpg'

export default class Speakers extends Component {
    constructor(props){
        super(props);
        this.state={
            modal:false,
            track:""
        }
    }

    render() {
        return (
<div className="speaker" id="speakers">
                
                <BackgroundAnimation />
                
                    <div className="section-heading-workshops">Speakers</div>
                    <div className="workshops-container" style={{zIndex:this.state.modal ? 0 : 200}}>
                    
                        <div className="workshops-box">
                            <div className="workshops-image-container">
                                <img className="workshops-image" src={dsworkshop} />
                            </div>
                            <div className="workshops-text">
                                <p className="workshops-text-name-container-hackathon">
                                Lata Hariharan 
                                </p>
                                <p className="workshops-subtext-name-container-hackathon">
                                Co-Founder (Svast Inc)
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
                                Anas Rahman Junaid
                                </p>
                                <p className="workshops-subtext-name-container-hackathon">
                                Hurun India MD
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
                                Sujith Nair
                                </p>
                                <p className="workshops-subtext-name-container-hackathon">
                                Beckn
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
                                Rajesh Nair
                                </p>
                                <p className="workshops-subtext-name-container-hackathon">
                                    Professor
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