import { useEffect} from 'react';
import EventHeader from '../../components/EventHeader/EventHeader';
import EventProblemStatement from '../../components/EventProblemStatement/EventProblemStatement'
import EventPrizes from '../../components/EventPrizes/EventPrizes'
import EventFAQ from '../../components/EventFAQ/EventFAQ'
import EventSponsers from '../../components/EventSponsers/EventSponsers'
import EventFooter from '../../components/EventFooter/EventFooter';
import BackgroundAnimation from '../../components/BackgroundAnimation/BackgroundAnimation';
import './index.css';

export default function Event() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

        return (
           <div className="event-page">
                <EventHeader />
                <div className="event-main">

                    <EventProblemStatement />
                    <EventPrizes />
                    <EventFAQ />
                    <EventSponsers />
                    <BackgroundAnimation />
                </div>
                <EventFooter />
           </div> 
        )
}    
