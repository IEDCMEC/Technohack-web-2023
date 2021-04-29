import { Component } from "react";
import './AngelConnectTimeline.css';
import timelineData from './AngelConnectTimelineData'
import arrowIcon from '../../../assets/right-arrow-black-triangle.png'


export default class AngelConnectTimeline extends Component {
  state = {
    selectedDay: 0,
  }

  dateChangeHandler = (number) => {
    this.setState({
      selectedDay: number
    })
  }

  dateStyleHandler = (number) => {
    let classname = " angel-connect-timeline-date";
    if (this.state.selectedDay === number)
      classname += " angel-connect-timeline-date-selected"

    if (number === 0)
      classname += " angel-connect-timeline-border-left"
    else if (number === 4)
      classname += " angel-connect-timeline-border-right"
    else
      classname += " angel-connect-timeline-border-center"

    return classname
  }

  render() {
    return (<>
      <div id="angelconnecttimeline"></div>
      <div className="angel-connect-timeline">
        <div className="angel-connect-timeline-header">
          <h1>TIMELINE</h1>
        </div>
        <hr />
        <div className="angel-connect-timeline-main">
          <div className="angel-connect-timeline-datebox">
            {timelineData.map(day => {
              return (
                <div
                  onClick={() => this.dateChangeHandler(day.number)}
                  className={this.dateStyleHandler(day.number)}
                  key={day.number}>
                  <span>
                    {this.state.selectedDay === day.number
                      ? <img className="angel-connect-timeline-mobile-only-icon" src={arrowIcon} alt="icon"></img>
                      : <span className="angel-connect-timeline-mobile-only-icon-empty"></span>
                    }
                  </span>
                  <span>{day.date}</span>
                </div>
              )
            })}
          </div>
          <div className="angel-connect-timeline-content">
            <h1 className="angel-connect-timeline-content-title">{timelineData[this.state.selectedDay].title}</h1>
            <p className="angel-connect-timeline-content-body">{timelineData[this.state.selectedDay].content}</p>
          </div>
        </div>
      </div>
    </>
    );
  }
}