import React from 'react'
import collegeLogo from '../../assets/college_logo.png';
import iedcLogo from '../../assets/iedc_logo.png';
import tieLogo from '../../assets/Tie.jpeg';
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';
import './About.css';
function About() {
    return (
        <div id="about">
        <BackgroundAnimation />
            <h1 className='about-heading'>ABOUT US</h1>
            <div>
                <div className='box1'>
                    <p className='about-text'>
                        Govt. Model Engineering College has been a centre of excellence for the last 31 years
                        and has carved an elegant niche for itself among the best engineering colleges across
                        the nation. Working steadily since its inception to bring out the best in its students,
                        MEC boasts of record-breaking placements and is a centre of academic excellence.
                    </p>
                    <img src={collegeLogo} alt="College" className='clg-img' />
                </div>
                <div className='box2'>
                    <img src={iedcLogo} alt='IEDC-MEC' className='iedc-img' />
                    <p className='about-text iedc'>
                        With a wide network of students passionate about technology and learning, The Innovation
                        and Entrepreneurship Development Centre Cell of MEC seeks to enrich the entrepreneurial
                        culture in MEC and foster innovation.
                    <br /> <br />
                    IEDC MEC aims to build up a system of guidance and support to transform every idea into
                    a reality, by offering pre-incubation services for students in association with the Kerala
                    Startup Mission.
                    <br /> <br />
                    In its bare essence, by hosting stimulating and creative workshops to educate, talks by
                    accomplished entrepreneurs to enlighten, exposure to real-world financial models, and more,
                    IEDC MEC sets their sights on developing, nurturing, and sustaining the entrepreneurial spirit
                    within every student.
                    </p>
                </div>
                <div className='box1'>
                    <p className='about-text2'>
                        Govt. Model Engineering College has been a centre of excellence for the last 31 years and has
                        carved an elegant niche for itself among the best engineering colleges across the nation. Working
                        steadily since its inception to bring out the best in its students, MEC boasts of record-breaking
                        placements and is a centre of academic excellence.
                    </p>
                    <img src={tieLogo} alt='Tie' className='tie-img' />
                </div>
                <div className='box2'>
                    <p className='about-text2 techno'>
                        <b>Technopreneur</b> is the flagship event of IEDC MEC, and one of the most looked forward to events
                    in MEC. It is the annual entrepreneurial and managerial symposium of Model Engineering College
                    and includes a plethora of events including Idea Pitching, Prototype Development, hackathons,
                    and much more. The first edition of Technopreneur, Technopreneur 2006, went on to win the Best
                    Yi-Net event at the CII National Summit in Mumbai. Technopreneur 2021 will embrace its past
                    legacy with a modern upgrade and intends to train and up-skill the hungry minds seeking to
                    build enterprises on their own. With over 1000+ participants from top engineering colleges and
                    B-schools across the country, Technopreneur aims to impact everyone from students to working-class
                    professionals. One of our most exciting pre-events for this year is the Hult Prize, which is an annual,
                    year-long competition that challenges students to solve pressing social issues around the world.
                    <br /> <br />
                        <b>Emerge! Endure! Evolve! </b>
                        <br /> <br />
                    Technopreneur has always followed the path of these three words when it comes to choosing a
                    theme. In this pandemic-stricken world, each human being is fighting through thick and thin to
                    overcome the challenges we are faced with. To successfully emerge from the ashes of these dire
                    conditions, this year's theme for Technopreneur is to evolve into a better world through disruption,
                    to provide the most innovative solutions for our problems. Our theme hopes to invoke a sense of
                    responsibility and leadership in one's mind in order for them to understand that all our battles can
                    be won through entrepreneurial solutions. Technopreneur is that missing puzzle piece for aspiring minds
                    to make their ideas and dreams come true.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
