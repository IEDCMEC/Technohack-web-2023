import { Component } from "react";
import Header from "../../components/Home/Header/Header";
import Speakers from "../../components/Home/Speakers/Speakers";
import Competitions from "../../components/Home/Competitions/Competitions";
import Faq from "../../components/Faq/Faq";
import data from "../../components/Faq/FaqData";
import Footer from "../../components/Home/Footer/Footer";
import About from "../../components/Home/About/About";
import BackgroundAnimation from '../../components/Home/BackgroundAnimation/BackgroundAnimation';
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
