import { Component } from "react";
import "./AngelConnectAbout.css";
import border from "../../../assets/border.png";
import logo from "../../../assets/angel_connect_white.png";
export default class AngelConnectAbout extends Component {
  render() {
    return (
      <div className="angel-connect-about" id="angel-connect-about">
        <div className="angel-heading"> ANGEL CONNECT </div>
        <p className="angel-text">
          Polish your ideas, touch up on your projects details, and get ready to
          blow away industry experts with your innovative inventions. Apply now,
          and you might find yourselves with the funding and investment that you
          needed to raise your idea from a thought to a success!
          <br />
          <br />
          AngelConnect is a unique opportunity for all the student startups and
          fledgling entrepreneurs out there to network and get investments from
          Angel Investors themselves. It is a chance like no other to connect to
          big names and the very entrepreneurs you might have been looking upto!
        </p>
        <img src={logo} alt="AngelConnect" className="angelImg" />
      </div>
    );
  }
}
