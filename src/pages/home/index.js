import { Component } from "react";
import Header from "../../components/Home/Header/Header";
import Speakers from "../../components/Home/Speakers/Speakers";
import Competitions from "../../components/Home/Competitions/Competitions";
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
          <HomeFaq />
        </div>
        <About />
        <Footer />
      </div>
    );
  }
}
