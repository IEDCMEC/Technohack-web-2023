import { Component } from "react";
import Header from "../../components/Home/Header/Header";
import Speakers from "../../components/Home/Speakers/Speakers";
import Competitions from "../../components/Home/Competitions/Competitions";
<<<<<<< HEAD
import Workshops from "../../components/Home/Workshops/Workshops"
import Faq from "../../components/Faq/Faq";
import data from "../../components/Faq/FaqData";
=======
>>>>>>> 3a196d8c6bf407941cd002efffe7350474b583ef
import Footer from "../../components/Home/Footer/Footer";
import About from "../../components/Home/About/About";
import BackgroundAnimation from "../../components/Home/BackgroundAnimation/BackgroundAnimation";
import HomeFaq from "../../components/Home/HomeFaq/HomeFaq";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='background-container'>
          <Speakers />
          <Competitions />
          <Workshops/>
          <HomeFaq/>
        </div>
        <About />
        <Footer />
      </div>
    );
  }
}
