import { useEffect} from 'react';
import EventHeader from '../../components/EventHeader/EventHeader';
import EventProblemStatement from '../../components/EventProblemStatement/EventProblemStatement'
import EventPrizes from '../../components/EventPrizes/EventPrizes'
import EventFAQ from '../../components/EventFAQ/EventFAQ'
import EventSponsers from '../../components/EventSponsers/EventSponsers'
import EventFooter from '../../components/EventFooter/EventFooter';
import BackgroundAnimation from '../../components/EventBackgroundAnimation/EventBackgroundAnimation';
import './index.css';

export default function Event() {
    useEffect(() => {
        document.title = "TechnoHack | Technopreneur 2021"
        window.scrollTo(0,0);
      }, []);

        return (
           <div className="event-page">
                <meta name="description" content="Here is the chance you’ve been waiting for to give wings to your creativity. Give life to your innovative ideas that can be solutions to the problems of today with TechnoHack!" />
                <meta property="og:site_name" content="TechnoHack | Technopreneur 2021"/>
                <meta property="og:title" content="TechnoHack | Technopreneur 2021" />
                <meta property="og:description" content="Here is the chance you’ve been waiting for to give wings to your creativity. Give life to your innovative ideas that can be solutions to the problems of today with TechnoHack!" />
                <meta property="og:image" itemprop="image" content="../../assets/technohacklogo.png"/>
                <meta property="og:type" content="website" />
                <link rel="apple-touch-icon" href="../../assets/technohacklogo.png" />
                <EventHeader/>
                <div className="event-background-container">
                    {/* <BackgroundAnimation /> */}
                    <div className="event-main">
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
