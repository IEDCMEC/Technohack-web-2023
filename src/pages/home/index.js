import { Component } from 'react';
import Header from '../../components/Header/Header';
import Speakers from '../../components/Speakers/Speakers';
import Competitions from '../../components/Competitions/Competitions';
import Faq from '../../components/Faq/Faq';



export default class Home extends Component {
    render() {
        return (
           <div>
                <Header />
                <Speakers />
                <Competitions />
                <Faq />
           </div> 
        )
    }
}    