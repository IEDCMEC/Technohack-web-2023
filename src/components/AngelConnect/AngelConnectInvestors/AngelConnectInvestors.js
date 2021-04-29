import { Component } from "react";
import "./AngelConnectInvestors.css";
import investor1 from "../../../assets/investor1.png";
import investor2 from "../../../assets/investor2.png";
import investor3 from "../../../assets/investor3.png";
import investor4 from "../../../assets/investor4.png";
import investor5 from "../../../assets/investor5.png";
import investor6 from "../../../assets/investor6.png";
import investor7 from "../../../assets/investor7.png";
import investor8 from "../../../assets/investor8.png";
export default class AngelConnectInvestors extends Component {
  investors = [
    { img: investor1, name: "V C Karthik", founder: "FOUNDER" },
    { img: investor2, name: "V C Karthik", founder: "FOUNDER" },
    { img: investor3, name: "V C Karthik", founder: "FOUNDER" },
    { img: investor4, name: "V C Karthik", founder: "FOUNDER" },
    { img: investor5, name: "V C Karthik", founder: "FOUNDER" },
    { img: investor6, name: "V C Karthik", founder: "FOUNDER" },
    { img: investor7, name: "V C Karthik", founder: "FOUNDER" },
    { img: investor8, name: "V C Karthik", founder: "FOUNDER" },
  ];

  render() {
    return (<>
      <div id="angelconnectinvestors"></div>
      <div className="angel-connect-investors">
        <div className="investor-container">
          {this.investors.map((investor) => (
            <div className="investor-card-container">
              <div className="investor-card">
                <img className="investor-image" src={investor.img} />
                <div className="investor-text">
                  <div style={{ textAlign: "center", fontWeight: "bolder" }}>
                    <b>{investor.name}</b>
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      marginTop: "10px",
                      fontSize: "small",
                      fontWeight: "500",
                    }}
                  >
                    {investor.founder}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </>
    );
  }
}
