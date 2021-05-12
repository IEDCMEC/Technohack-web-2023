import { Component } from 'react';
import './Speakers.css';
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';
import Modal from '../SpeakerModal/Modal';
import samir from '../../../assets/samir.jpeg';
import anas from '../../../assets/anas_speaker.jpg';
import sujith from '../../../assets/sujith.jpeg';
import lata from '../../../assets/lata.jpg';
import rajesh from '../../../assets/rajesh.jpg';
import kris from '../../../assets/kris.jpg';

import speakerList from './SpeakerList'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

export default class Speakers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            track: "",
        }
    }

    render() {
        const speakerImgs = [lata, anas, sujith, rajesh, kris]
        return (
            <div>
                <div className="speakers-speaker-container" id="speakers">
                    <div>
                        <BackgroundAnimation />
                    </div>
                    <div>
                        <div className="section-heading-workshops">Speakers</div>
                        <div className="speakers-speaker-carousel-container">
                            <Carousel responsive={responsive}>
                                {speakerList.map(speaker => (
                                    <div className="speakers-speaker-box" key={speaker.id}>
                                        <div>
                                            <img className="speaker-img" src={speakerImgs[speaker.id - 1]} />
                                        </div>
                                        <div className="speakers-workshops-text">
                                            <p className="workshops-text-name-container-hackathon">
                                                {speaker.name}
                                            </p>
                                            <p className="workshops-subtext-name-container-hackathon">
                                                {speaker.designation}
                                            </p>
                                            <div onClick={() => { this.setState({ modal: true, track: speaker.track }) }} to="/technohack" className="workshops-button">
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