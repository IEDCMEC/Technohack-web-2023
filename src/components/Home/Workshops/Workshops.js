import { Component } from 'react';
import { Link } from "react-router-dom";
import './Workshops.css';
import Carousel from "react-multi-carousel";
import workshopList from './WorkshopList';
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';
import amal from '../../../assets/amal_ws.jpg';
import nikita from '../../../assets/nikita_ws.jpg';
import Modal from '../Modal/Modal';
import samir from '../../../assets/samir.jpeg';
import salman from '../../../assets/salman.jpeg';
import gokul from '../../../assets/gokul.png';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
    }
};

export default class Workshops extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            track: ""
        }
    }
    render() {
        const workshopImgs = [samir, nikita, amal, salman,gokul]
        return (
            <div>
                <div className="workshops-speaker-container " id="workshops">
                    <div>
                        <BackgroundAnimation />
                    </div>
                    <div>
                        <div className="section-heading-workshops">Workshops</div>
                        <div className="speakers-speaker-carousel-container">
                            <Carousel responsive={responsive}>
                                {workshopList.map(workshop => (
                                    <div className="speakers-speaker-box" key={workshop.id}>
                                        <div>
                                            <img className="workshops-image" src={workshopImgs[workshop.id - 1]} />
                                        </div>
                                        <div className="speakers-workshops-text">
                                            <p className="workshops-text-name-container-hackathon"> 
                                                {workshop.field}
                                            </p>
                                            <p className="workshops-subtext-name-container-hackathon">
                                                {workshop.name}
                                            </p>
                                            <p className="workshops-designation-name-container-hackathon">
                                                {workshop.designation}
                                            </p>
                                            <div onClick={() => { this.setState({ modal: true, track: workshop.track }) }} to="/technohack" className="workshops-button">
                                                Learn More
                                    </div>
                                        </div>
                                    </div>

                                ))}
                            </Carousel>
                        </div>
                    </div>
                    {
                        this.state.modal ? <Modal close={() => this.setState({ modal: false })} track={this.state.track} /> : null
                    }
                </div>
            </div >
        )
    }
};