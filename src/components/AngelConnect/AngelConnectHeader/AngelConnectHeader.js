import AngelConnectNavbar from "../AngelConnectNavbar/AngelConnectNavbar";
import "./AngelConnectHeader.css";
import title from "../../../assets/angelconnect_black.png";
import { Component } from "react";
import { NavHashLink as Link } from "react-router-hash-link";

export default class AngelConnectHeader extends Component {
  render() {
    return (
      <div className="angel-connect-header">
        <AngelConnectNavbar />
        <div className="angelconnect-header-container">
          <div className="angelconnect-header-angelconnecttitle">
            <img src={title} alt="Angel Connect" width="412" height="232"></img>
          </div>
          <div className="angelconnect-header-content">
          
          </div>
          <div className="angelconnect-header-register">
            <a
              className="angelconnect-header-register"
              href="https://forms.gle/WS6hti2jA17PuLVT7"
            >
              REGISTER
            </a>
          </div>
        </div>
      </div>
    );
  }
}
