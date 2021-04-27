import { Component } from "react";
import Header from "../../components/Header/Header";
import Speakers from "../../components/Speakers/Speakers";
import Competitions from "../../components/Competitions/Competitions";
import Faq from "../../components/Faq/Faq";
import data from "../../components/Faq/FaqData";
import Footer from "../../components/Footer/Footer";
import About from "../../components/About/About";
import BackgroundAnimation from '../../components/BackgroundAnimation/BackgroundAnimation';
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="background-container">
          <Speakers />
          <Competitions />
          <Faq data={data} />
        </div>
        <About/>
        <Footer/>
      </div>
    );
  }
}
