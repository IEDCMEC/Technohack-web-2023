import { useEffect } from 'react';
import EventHeader from '../../components/Event/EventHeader/EventHeader';
import EventProblemStatement from '../../components/Event/EventProblemStatement/EventProblemStatement'
import EventPrizes from '../../components/Event/EventPrizes/EventPrizes'
import EventFAQ from '../../components/Event/EventFAQ/EventFAQ'
import EventSponsers from '../../components/Event/EventSponsers/EventSponsers'
import EventFooter from '../../components/Event/EventFooter/EventFooter';
import BackgroundAnimation from '../../components/Event/EventBackgroundAnimation/EventBackgroundAnimation';
import './index.css';
import { Helmet } from "react-helmet";

export default function Event() {
    useEffect(() => {
        document.title = "TechnoHack | Technopreneur 2021"
        document.getElementById('technohack-page').scrollIntoView()
    }, []);

    return (
        <div className="event-page" id="technohack-page">
            <Helmet>
                <meta name="description" content="Here is the chance you’ve been waiting for to give wings to your creativity. Give life to your innovative ideas that can be solutions to the problems of today with TechnoHack!" />
                <meta property="og:site_name" content="TechnoHack | Technopreneur 2021" />
                <meta property="og:title" content="TechnoHack | Technopreneur 2021" />
                <meta property="og:description" content="Here is the chance you’ve been waiting for to give wings to your creativity. Give life to your innovative ideas that can be solutions to the problems of today with TechnoHack!" />
                <meta property="og:image" itemprop="image" content="../../assets/technohacklogo.png" />
                <meta property="og:type" content="website" />
                <link rel="apple-touch-icon" href="../../assets/technohacklogo.png" />
            </Helmet>
            <EventHeader />
            <div className="event-background-container">
                {/* <BackgroundAnimation /> */}
                <div className="event-main">
                    <div className="left-border-top-square"></div>
                    <EventProblemStatement />
                    <EventPrizes />
                    <EventFAQ />
                    <EventSponsers />
                </div>
            </div>
            <EventFooter />
        </div>
    )
}
