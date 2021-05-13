import { Component } from "react";
import AngelConnectHeader from '../../components/AngelConnect/AngelConnectHeader/AngelConnectHeader';
import AngelConnectAbout from '../../components/AngelConnect/AngelConnectAbout/AngelConnectAbout';
import AngelConnectInvestors from '../../components/AngelConnect/AngelConnectInvestors/AngelConnectInvestors';
import AngelConnectFaq from '../../components/AngelConnect/AngelConnectFaq/AngelConnectFaq';
import AngelConnectFooter from '../../components/AngelConnect/AngelConnectFooter/AngelConnectFooter';
import AngelConnectTimeline from '../../components/AngelConnect/AngelConnectTimeline/AngelConnectTimeline';

import './index.css'
export default class Home extends Component {

  componentDidMount() {
    document.getElementById('angel-connect-page').scrollIntoView()
  }
  render() {
    return (
      <div className="angel-connect-page" id="angel-connect-page">
        <AngelConnectHeader />
        <AngelConnectAbout />
        <AngelConnectTimeline />
        <AngelConnectInvestors />
        <AngelConnectFaq />
        <AngelConnectFooter />
      </div>
    );
  }
}

